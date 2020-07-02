import Layout from "@/components/core/Layout";
import { getArticles } from "@/lib/api";
import Link from "next/link";
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

// export async function getStaticPaths() {
//   const allPosts = (await getAllPostsWithSlug()) || [];
//   return {
//     paths: allPosts.map((post) => `/posts/${post.slug}`),
//     fallback: true,
//   };
// }

export default ({ articles }) => (
  <Layout showGoBack styled>
    <h1>Articles</h1>
    <p>
      This content is retrieved from a CMS, statically and sorted by topics.
      Each article will go to a specific template based in the <i>metadata</i>.
    </p>
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
  </Layout>
);
