import {  useState } from "react";
import { useDispatch } from "react-redux";

import { showNotif } from "../../store/notifSlice";
import LoadingButton from "../button/PendingInline"

const Hapus= ({ kata, cancel, setKatas }) => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    try {
      setPending(true);
      const response = await fetch(
        `/api/kata-mereka/hapus/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Tidak bisa hapus");
      }
      dispatch(
        showNotif({
          status: "Success",
          message: "Data berhasil dihapus",
          action: null,
        })
      );
      setKatas((prev) => prev.filter((t) => t.id !== id));
      cancel()
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
      <div className="opacity-40 fixed inset-0 z-30 bg-black"></div>
      <div className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-30">
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 bg-gradient-to-r from-teal-500 to-green-400">
                <span className="text-white text-xl font-bold ">
                  Hapus Kata
                </span>
              </div>
              <div className="p-4 mt-2">
                <p>
                  Apakah kamu yakin akan menghapus kata{" "}
                  <span className="font-semibold">{kata?.nama}</span>{" "}
                </p>
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
                        onClick={() => deleteHandler(kata.id)}
                      >
                        Hapus
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hapus;
