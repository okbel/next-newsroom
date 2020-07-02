import Layout from "@/components/core/Layout.js";
import Link from "next/link";
import s from "./BaseLayout.module.css";

export default ({ children, template }) => (
  <Layout>
    <article>
      <header>
        <span>Template: {template}</span>
        <Link href="/examples/articles" as="/examples/articles">
          <a className="text-geist-blue block"> Go back to Articles </a>
        </Link>
      </header>
      <main className={s.root}>{children}</main>
    </article>
  </Layout>
);
