import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Courosal from "../components/elements/Courosal";

export default function Home() {
  const [alumni, setAlumni] = useState();
  const [berita, setBerita] = useState();
  const [donasis, setDonasis] = useState();
  const router = useRouter();

  return (
    <>
      <Courosal />
      <section className="container my-0 mx-auto px-1 sm:px-2 md:px-3 lg:px-4 xl:px-6 2xl:px-8 py-6 md:py-8 lg:py-10 xl:py-14 2xl:py-20">
        <h4 className="text-center text-title mb-6 mt-10">Alumni</h4>
        <div className="flex flex-wrap justify-center gap-y-3 text-center">
          <div className="w-full sm:w-72 font-semibold">
            <div className="bg-teal-200 p-4 mx-3 border-teal-400 border-4 rounded-xl border-dashed hover:text-teal-800 hover:border-teal-800 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              <h3 className="mt-3 text-black text-3xl">
                {alumni?.alumni ? alumni.alumni : "0"}
              </h3>
              <p className="mt-2 text-gray-800 text-xl">
                Jumlah Alumni Terdaftar
              </p>
            </div>
            {/* single services */}
          </div>
          <div className="w-full sm:w-72 font-semibold">
            <div className="bg-teal-200 p-4 mx-3 border-teal-400 border-4 rounded-xl border-dashed hover:text-teal-800 hover:border-teal-800 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-3 text-black text-3xl">
                Rp. {alumni?.donasi ? alumni.donasi : "0"}
              </h3>
              <p className="mt-2 text-gray-800 text-xl">Jumlah Donasi</p>
            </div>
            {/* single services */}
          </div>
          <div className="w-full sm:w-72 font-semibold">
            <div className="bg-teal-200 p-4 mx-3 border-teal-400 border-4 rounded-xl border-dashed hover:text-teal-800 hover:border-teal-800 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="mt-3 text-black text-3xl">
                {alumni?.angkatan ? alumni?.angkatan : "0"}
              </h3>
              <p className="mt-2 text-gray-800 text-xl">
                Jumlah Angkatan Aktif
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => router.push("/alumni/cari")}
            className="mx-auto btn-pri py-2 px-6"
          >
            Cari Data Alumni
          </button>
        </div>
      </section>

      <section className="container my-0 mx-auto px-1 sm:px-2 md:px-3 lg:px-4 xl:px-6 2xl:px-8 py-6 md:py-8 lg:py-10 xl:py-14 2xl:py-20">
        <h4 className="text-center text-title mb-6 mt-10">Donasi</h4>
        <div className="flex flex-wrap justify-center">
          {donasis &&
            donasis.map((item) => <Donation key={item.id} data={item} />)}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.push("/donasi")}
            className="mx-auto btn-pri py-2 px-6"
          >
            Lihat Donasi Lainya
          </button>
        </div>
      </section>

      <section className="container my-0 mx-auto px-1 sm:px-2 md:px-3 lg:px-4 xl:px-6 2xl:px-8 py-6 md:py-8 lg:py-10 xl:py-14 2xl:py-20">
        <h4 className="text-center text-title mb-6 mt-10">Berita</h4>
        <div className="flex flex-wrap justify-center gap-y-3">
          {berita && berita.map((item) => <News key={item.id} data={item} />)}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => router.push("/berita")}
            className="mx-auto btn-pri py-2 px-6"
          >
            Lihat Berita Lainya
          </button>
        </div>
      </section>
    </>
  );
}
