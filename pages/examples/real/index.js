import Layout from "@/components/core/Layout";
import { getArticles } from "@/lib/api";
import Link from "next/link";
import { Header } from "@/components/examples/real";

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
    <nav>
      <ul>
        {Object.keys(articles).map((section) => (
          <li>
            In <strong>{section}</strong>
            <ul>
              {articles[section].map((a) => (
                <li>
                  <Link
                    href={`/examples/articles/${section}/${a.slug}`}
                    as={`/examples/articles/${section}/${a.slug}`}
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  </>
);
