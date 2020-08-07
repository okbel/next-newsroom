import { getArticles } from "@/lib/api";
import { Header, Main } from "@/components/examples/real";

export async function getStaticProps({ params }) {
  const { objects } = await getArticles();
  const articles = objects.reduce((prev, curr) => {
    const section = curr.metadata.section
      ? curr.metadata.section
      : "uncategorized";

    if (!prev[section]) {
      prev[section] = [];
    }

    prev[section] = [...prev[section], curr];

    return prev;
  }, {});

  return {
    props: {
      articles,
    },
  };
}

export default ({ articles }) => (
  <>
    <Header />
    <Main articles={articles} />
  </>
);
