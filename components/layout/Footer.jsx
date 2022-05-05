import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-400 to-emerald-500">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/">
            <a
              href=""
              className="flex title-font font-medium items-center md:justify-start justify-center"
            >
              <span className="text-xl tracking-widest font-semibold text-gray-800">
                Visit Bukit Sutera
              </span>
            </a>
          </Link>
          <p className="mt-2 text-sm ">
            Jl. AP. Pettarani Ruko Diamond LT 2 Blok D No. 16 Makassar (Warkop
            Galery)
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center gap-x-3">
          <div className="mx-auto px-4">
            <h2 className="font-semibold text-gray-800 tracking-widest text-xl mb-1.5">
              Layanan Lain
            </h2>
            <div className="flex gap-x-2 mb-10 ">
              <a href="https://xxxxx/" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-800 hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                  />
                </svg>
              </a>
              <a href="https://xxxxx/" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-800 hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-auto px-4">
            <h2 className="font-semibold text-gray-800 tracking-widest text-xl mb-1.5">
              Kontak
            </h2>
            <nav className="list-none mb-10 ">
              <li>Call Center : 112</li>
              <li>Telepon : (011) 9</li>
              <li>E-mail: xxxx@xx.id</li>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start flex-wrap gap-4 px-6">
        <p className="text-sm text-center">
          ©2022 Visit Bukit Sutera by salahuddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
