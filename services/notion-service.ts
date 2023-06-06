import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlogPost, PostPage } from "../@types/schema";

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
            filter: {
                property: "Published",
                checkbox: {
                    equals: true
                }
            },
            sorts: [
                {
                    property: 'Created',
                    direction: 'descending'
                }
            ]
        });

        // You may need to map the response to your BlogPost type here.
        // It depends on the structure of the data returned by the Notion API.

        return response.results.map(res => {
            // transform this response to a blog post
            return NotionService.pageToPostTransformer(res)
        })
    }


    async getSingleBlogPost(slug: string): Promise<PostPage> {
        let post, markdown

        const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";

        // list of blog posts
        const response = await this.client.databases.query ({
            database_id: database,
            filter: {
                property: 'Slug',
                formula: {
                    string: {
                        equals: slug
                    }
                }
            }
        })
        console.log(response); // Aquí se imprimirá la respuesta en la consola.

        
        if (!response.results[0]) {
            throw 'No results available'
        }


        // grag page from notion
        const page = response.results[0];

        const mdBlocks = await this.n2m.pageToMarkdown(page.id)
        //markdown = JSON.stringify(this.n2m.toMarkdownString(mdBlocks));
        markdown = this.n2m.toMarkdownString(mdBlocks);

        console.log(markdown);
        
        

        post = NotionService.pageToPostTransformer(page);
        

        return {
            post,
            markdown 
        }
    }


    private static pageToPostTransformer(page: any): BlogPost {
        let cover = page?.cover;
        let coverUrl = '';

        if (cover) {
            switch (cover.type) {
                case 'file':
                    coverUrl = cover.file;
                    break;
                case 'external':
                    coverUrl = cover.external.url;
                    break;
                default:
                    // add default cover image if you want
                    coverUrl = '' 
            }
        }

        



        return {
            id: page.id,
            cover: coverUrl,
            title: page.properties.Name.title[0].plain_text,
            tags: page.properties.Tags.multi_select,
            description: page.properties.Description.rich_text[0].plain_text,
            date: page.properties.Updated.last_edited_time,
            slug: page.properties.Slug.formula.string
        }
    }
}
