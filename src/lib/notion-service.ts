import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlogPost, PostPage } from "../@types/schema";

export const revalidate = 10; // In Seconds

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPublishedBlogPost(): Promise<BlogPost[]> {
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";

    // list blog post
    const response = await this.client.databases.query({
      database_id: database,
      page_size:1,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });
    console.log(response);
    return response.results.map((res) => {
      return NotionService.pageToPostTransformer(res);
    });
  }

  async getSingleBlogPost(slug: string): Promise<PostPage> {
    let post;
    let markdown;

    const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";

    // list of blog posts
    try {
      const response = await this.client.databases.query({
        database_id: database,
        filter: {
          property: "Slug",
          formula: {
            string: {
              equals: slug,
            },
          },
        },
      });
  
      if (!response.results[0]) {
        throw "No results available";
      }
  
      // grag page from notion
      const page = response.results[0];
  
      const mdBlocks = await this.n2m.pageToMarkdown(page.id);
      markdown = this.n2m.toMarkdownString(mdBlocks);

      console.log('NOTION SERVICES');
      //console.log('PAGE',page);
      console.log('mdBlocks',mdBlocks);
      console.log('MarkDown',markdown);
  
      post = NotionService.pageToPostTransformer(page);
  
      return {
        post,
        markdown,
        mdBlocks
      };
    } catch (err) {
      console.log('ERROR:',err);
      throw err
    }
  }

  private static pageToPostTransformer(page: any): BlogPost {
    let cover = page?.cover;
    let coverUrl = "";

    if (cover) {
      switch (cover.type) {
        case "file":
          coverUrl = cover.file.url;
          console.log('FILE',coverUrl);
          break;
        case "external":
          coverUrl = cover.external.url;
          console.log('EXTERNAL',coverUrl);
          break;
        default:
          // add default cover image if you want
          coverUrl = "";
      }
    }
    console.log('PRE',coverUrl);

    return {
      id: page.id,
      cover: coverUrl,
      title: page.properties.Name?.title[0]?.plain_text,
      tags: page.properties.Tags?.multi_select,
      description:page.properties.Description?.rich_text?.[0]?.plain_text ?? "",
      date: page.properties.Updated?.last_edited_time,
      slug: page.properties.Slug?.formula?.string,
    };
  }
}
