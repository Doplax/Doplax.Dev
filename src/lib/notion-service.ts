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
      //start_cursor: '64a48bb2-7542-4473-839d-401682c765ae',
      page_size: 10,
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
    return response.results.map((res) => {
      const data = NotionService.pageToPostTransformer(res);
      return data;
    });
  }

  async getNextPublishedBlogPost(): Promise<BlogPost[]> {
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";

    // list blog post
    const response = await this.client.databases.query({
      database_id: database,
      //start_cursor: '64a48bb2-7542-4473-839d-401682c765ae',
      page_size: 10,
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
    return response.results.map((res) => {
      const data = NotionService.pageToPostTransformer(res);
      console.log("data", data);
      return data;
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

      post = NotionService.pageToPostTransformer(page);

      return {
        post,
        markdown,
        mdBlocks,
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  private static pageToPostTransformer(page: any): BlogPost {
    let cover = page?.cover;
    let coverUrl = "";

    if (cover) {
      switch (cover.type) {
        case "file":
          coverUrl = cover.file.url;
          break;
        case "external":
          coverUrl = cover.external.url;
          break;
        default:
          // add default cover image if you want
          coverUrl = "";
      }
    }

    return {
      id: page.id,
      cover: coverUrl,
      title: page.properties.Name?.title[0]?.plain_text,
      tags: page.properties.Tags?.multi_select,
      description:
        page.properties.Description?.rich_text?.[0]?.plain_text ?? "",
      date: page.properties.Updated?.last_edited_time,
      slug: page.properties.Slug?.formula?.string,
    };
  }
}
