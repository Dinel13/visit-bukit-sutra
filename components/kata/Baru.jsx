import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showNotif } from "../../store/notifSlice";
import LoadingButton from "../button/PendingInline";

const Baru = ({ cancel, setKatas }) => {
  const [input, setInput] = useState({
    nama: "",
    image: "",
    pekerjaan: "",
    kata: "",
  });
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", input.nama);
    formData.append("image", input.image);
    formData.append("pekerjaan", input.pekerjaan);
    formData.append("kata", input.kata);
    try {
      setPending(true);
      const response = await fetch(`/api/kata-mereka/baru`, {
        method: "POST",
        headers: {},
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Tidak bisa menambah");
      }
      dispatch(
        showNotif({
          status: "Success",
          message: "Data berhasil ditambah",
          action: null,
        })
      );
      setKatas((prev) => [...prev, data.data]);
      cancel();
    } catch (error) {
      dispatch(
        showNotif({
          status: "Error",
          message: error.message,
          action: null,
        })
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div className="opacity-30 fixed inset-0 z-20 bg-black"></div>
      <div className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-30">
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-sky-400">
                <span className="text-white text-xl font-bold ">
                  Tambah Kata Mereka
                </span>
              </div>
              <form onSubmit={submitHandler} className="p-4 mt-2">
                <div>
                  <label htmlFor="Name">Nama</label>
                  <input
                    type="text"
                    name="nama"
                    value={input.nama}
                    onChange={handleChange}
                    required
                    className="input-field mt-1"
                  />
                </div>
                <label className="flex flex-wrap items-center mt-4">
                  <span className="text-sm">Foto</span>
                  <input
                    className="input-field mb-1"
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => {
                      setInput({
                        ...input,
                        image: e.target.files[0],
                      });
                    }}
                  />
                  <small>Ukuran maksimal file 2 mb</small>
                </label>
                <div className="mt-4">
                  <label htmlFor="email">Jabatan</label>
                  <input
                    type="text"
                    name="pekerjaan"
                    value={input.pekerjaan}
                    onChange={handleChange}
                    required
                    className="input-field mt-1"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="email">Kata</label>
                  <textarea
                    type="textarea"
                    name="kata"
                    value={input.kata}
                    onChange={handleChange}
                    required
                    className="input-field mt-1"
                  />
                </div>
                <div className="flex mt-6 text-center pb-3">
                  {pending ? (
                    <LoadingButton />
                  ) : (
                    <>
                      <button onClick={cancel} className="w-full btn-sec h-10">
                        batal
                      </button>
                      <button
                        className="w-full btn-pri h-10 ml-4"
                        type="submit"
                      >
                        Tambah
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Baru;
