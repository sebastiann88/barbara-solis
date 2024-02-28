import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "assets",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
    // {
    // name: "post",
    // label: "Posts",
    // path: "content/posts",
    // fields: [
    //   {
    //     type: "string",
    //     name: "title",
    //     label: "Title",
    //     isTitle: true,
    //     required: true,
    //   },
    //   {
    //     type: "rich-text",
    //     name: "body",
    //     label: "Body",
    //     isBody: true,
    //   },
      {
        name: "page",
        label: "Page",
        path: "content",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH || "",
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
