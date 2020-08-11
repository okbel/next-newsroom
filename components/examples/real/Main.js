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
        <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl smnpm:leading-10">
          The Hidden Magnetic Universe Begins to Come Into View
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white">
          Astronomers are discovering that magnetic fields permeate much of the
          cosmos. If these fields date back to the Big Bang, they could solve a
          major cosmological mystery.
        </p>
      </div>
    </section>
    <div className="container mx-auto my-6 mb-24">
      <ul>
        {Object.keys(articles).map((section) => (
          <li className="bg-gray-100 p-6 mb-6">
            <label className="py-1 text-sm text-indigo-800 uppercase rounded-md ">
              {section}
            </label>
            <div class="container mx-auto my-3 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {articles[section].map((a) => (
                <li className="">
                  <a href="#" class="block">
                    <Link
                      href={`/examples/articles/${section}/${a.slug}`}
                      as={`/examples/articles/${section}/${a.slug}`}
                    >
                      <h3 class="mt-4 text-xl leading-7 font-semibold text-gray-900">
                        {a.title}
                      </h3>
                    </Link>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                      volutpat massa dictumst amet. Sapien tortor lacus arcu.
                    </p>
                  </a>
                  <div class="mt-6 flex items-center">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#">Paul York</a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500 ml-4">
                      <time datetime="2020-03-16">Mar 16, 2020</time>
                      <span class="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </main>
);

export default Main;
