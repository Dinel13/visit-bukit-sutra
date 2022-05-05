import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const itemData = [
  {
    image: "/bg/1.jpeg",
    title: "Kontribusi untuk Almamater",
    body: "Bantu sesama alumni dengan berdonasi untuk kemanusiaan",
  },
  {
    image: "/bg/2.jpeg",
    title: "Temukan kenangan Sekolah",
    body: "Cari teman angkatan dan kenangan sekolah",
  },
  {
    image: "/bg/3.jpeg",
    title: "Update data alumni",
    body: "Perbarui data alumni kamu dengan mudah dan cepat",
  },
];

const Courosal = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => next(), 8000);
    return () => clearInterval(intervalId.current);
  });

  const back = () => {
    if (itemIndex > 0) {
      setItemIndex((prev) => prev - 1);
    } else {
      setItemIndex(itemData.length - 1);
    }
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => next(), 10000);
  };

  const next = () => {
    if (itemIndex < itemData.length - 1) {
      setItemIndex((prev) => prev + 1);
    } else {
      setItemIndex(0);
    }
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => next(), 10000);
  };

  return (
    <div className="relative w-full flex flex-shrink-0 overflow-hidden">
      <Item item={itemData[itemIndex]} />
      <button
        onClick={() => back()}
        style={{ zIndex: 5 }}
        className="absolute left-3 sm:left-5 md:left-8 lg:left-10 top-1/2"
      >
        <svg
          className="w-8 h-8 font-bold text-teal-500 transition duration-500 ease-in-out transform motion-reduce:transform-none hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => next()}
        style={{ zIndex: 5 }}
        className="absolute right-3 sm:right-5 md:right-8 lg:right-10 top-1/2"
      >
        <svg
          className="w-8 h-8 font-bold text-teal-500 transition duration-500 ease-in-out transform motion-reduce:transform-none hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <div className="w-full h-80 md:h-102 lg:h-110 relative">
      <div className="absolute inset-0 " style={{ zIndex: 5 }}>
        <div className="flex flex-col w-full h-full items-center justify-center relative">
          {/* <div className="max-w-3xl text-center  backdrop-blur-sm bg-w/10 p-4 rounded-3xl"> */}
          <div className="max-w-3xl text-center mb-8 p-4 rounded-3xl">
            <h3 className="text-title text-gray-200">{item.title}</h3>
            <p className="text-body mt-2 text-gray-300">
              {item.body}
            </p>
          </div>
          {/* <div className="absolute bottom-0 mb-6">
            <Link href="/kelas">
              <a className="text-sky-500 font-semibold hover:btn-pri px-4 py-2.5">
                Temukan kelas
              </a>
            </Link>
            <Link href="/kelas/baru">
              <a className="text-sky-500 font-semibold hover:btn-pri ml-2 px-4 py-2.5">
                Tawarkan kelas
              </a>
            </Link>
          </div> */}
        </div>
      </div>
      <Image src={item.image} layout="fill" alt={item.title} className="rounded-b-3xl"/>
      <div className="absolute inset-0 z-0 bg-black opacity-60 rounded-b-3xl"></div>
    </div>
  );
};

export default Courosal;