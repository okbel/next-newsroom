import Link from "next/link";
import s from "./MainNav.module.css";

const MainNav = () => (
  <div className={s.root}>
    <div className="flex flex-col">
      Concepts:
      <div className={s.row}>
        <div className={s.col}>
          <Link href="/concepts/example-ssg" as="/concepts/example-ssg">
            <a className={s.btn}>Static Generation (SSG)</a>
          </Link>
        </div>
        <div className={s.col}>
          <Link href="/concepts/example-ssr" as="/concepts/example-ssr">
            <a className={s.btn}>Server Rendered (SSR)</a>
          </Link>
        </div>
        <div className={s.col}>
          <Link href="/concepts/isg" as="/concepts/isg">
            <a className={s.btn}>Incremental Static Generation</a>
          </Link>
        </div>
      </div>
      Examples:
      <div className={s.row}>
        <div className={s.col}>
          <Link href="/examples/common" as="/examples/common">
            <a className={s.btn}>Common Newsroom</a>
          </Link>
          <ul>
            <li>Example using templates by section</li>
            <li>Powered by CosmicJS</li>
            <li>Content loaded statically</li>
          </ul>
        </div>
        <div className={s.col}>
          <Link href="/examples/real" as="/examples/real">
            <a className={s.btn}>Real Case Newsroom</a>
          </Link>
          <ul>
            <li>Lazy loading</li>
            <li>Ads</li>
            <li>Example using templates by section</li>
            <li>Powered by CosmicJS</li>
            <li>Content loaded statically</li>
          </ul>
        </div>
      </div>
    </div>
    <footer className="mt-12">
      Built by <strong>Vercel ▲</strong> with{" "}
      <svg
        width="80px"
        viewBox="0 0 207 124"
        version="1.1"
        className="inline ml-3"
      >
        <defs />
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-247.000000, -138.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <g id="next-black" transform="translate(247.000000, 138.000000)">
              <g id="EXT-+-Type-something">
                <path
                  d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                  id="EXT"
                />
                <polygon
                  id="Type-something"
                  points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                />
              </g>
              <path
                d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                id=".JS"
              />
            </g>
          </g>
        </g>
      </svg>
    </footer>
  </div>
);

export default MainNav;
