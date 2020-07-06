import BaseLayout from "@/components/BaseLayout";
import { getArticleBySlug } from "@/lib/api";

export default function ({ article }) {
  if (!article) {
    return null;
  }
  return (
    <BaseLayout template="education">
      <header>
        <h1 className="mb-12">{article.title}</h1>
      </header>

      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </BaseLayout>
  );
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths(params) {
  return {
    paths: [],
    fallback: true,
  };
}
