import { createClient } from "contentful";

let contentfulCLient = createClient({
    space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY,
});

export default contentfulCLient;
