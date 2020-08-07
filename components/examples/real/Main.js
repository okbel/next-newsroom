import Image from "@/components/core/Image";
import Link from "next/link";
const Main = ({ articles }) => (
  <main className="relative">
    <section className="relative bg-indigo-100 overflow-hidden">
      <img
        className="absolute w-full object-cover z-0"
        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
      />
      <div className="container h-64 mx-auto p-10 relative z-10">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          The Hidden Magnetic Universe Begins to Come Into View
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
          Astronomers are discovering that magnetic fields permeate much of the
          cosmos. If these fields date back to the Big Bang, they could solve a
          major cosmological mystery.
        </p>
      </div>
    </section>
    <div class="container mx-auto p-10 mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
              Article
            </span>
          </a>
        </div>
        <a href="#" class="block">
          <h3 class="mt-4 text-xl leading-7 font-semibold text-gray-900">
            Boost your conversion rate
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </a>
        <div class="mt-6 flex items-center">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a href="#">Paul York</a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">Mar 16, 2020</time>
            <span class="mx-1">&middot;</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        {Object.keys(articles).map((section) => (
          <li>
            <label className="px-2 py-1 text-sm text-indigo-100 uppercase rounded-md bg-indigo-800">
              {section}
            </label>
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
  </main>
);

export default Main;
