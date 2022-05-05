import Link from "next/link";

export default function Custom404() {
  return (
    <div className="py-24 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5">
        <div className="max-w-md">
          <div className="text-4xl md:text-5xl lg:text-6xl font-dark font-bold">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Halaman ini tidak ditemukan.
          </p>
          <p className="mb-6">
            Tapi jangan khawatir, kamu dapat menemukan banyak hal lainnya dari
            halaman beranda{" "}
          </p>
          <Link href="/">
            <a className="px-4 py-2 btn-pri">Kembali ke beranda</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
