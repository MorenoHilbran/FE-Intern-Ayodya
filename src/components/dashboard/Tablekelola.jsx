import { useState, useEffect } from "react";
import Form from "../molecules/Form";
import axios from "axios";
import TableKelas from "./TableClass";

export default function TableKelola() {
  const [datas, setDatas] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  useEffect(() => {
    dataFetching();
  }, []);

  const dataFetching = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/class");
      if (response.data && response.data.datas) {
        setDatas(response.data.datas);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="ml-[69px] mr-[87px]">
      <div className="flex justify-between items-center px-8 py-4 bg-white text-black">
        <h2 className="text-2xl font-bold">Kelola Kelas</h2>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-[#6148FF] border border-[#6148FF] text-white rounded-full hover:opacity-80 flex items-center gap-2 font-bold"
            onClick={handleClick}
          >
            <img src="/assets/plus.svg" alt="Tambah" />
            Tambah
          </button>
          <button className="px-4 py-2 bg-white border border-[#6148FF] text-[#6148FF] rounded-full hover:opacity-80 flex items-center gap-2 font-bold">
            <img src="/assets/filter.svg" alt="Filter" />
            Filter
          </button>
          <button className="px-4 py-2 bg-white text-[#6148FF] rounded-full hover:opacity-80">
            <img src="/assets/search2.svg" alt="Search" />
          </button>
        </div>

        {showForm && (
          <Form onClose={handleClose} callback={() => dataFetching()} />
        )}
      </div>
      <TableKelas datas={datas} />
    </div>
  );
}
