import { bucket } from "./cms.js";

export async function getArticles() {
  const articles = await bucket.getObjects({
    type: "articles",
    props: "slug,title,metadata",
    limit: 20,
  });

  return articles;
}

export async function getArticleBySlug(slug) {
  const article = await bucket.getObjects({
    type: "articles",
    props: "slug,title,content",
    query: {
      slug: slug,
    },
  });
  return article.objects[0];
}
