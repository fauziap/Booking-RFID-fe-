import Hotel from "../assets/hotel.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEllipsisV,
  faLocationDot,
  faMugSaucer,
  faStar,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import ParagrafJudul from "../components/ParagrafJudul";
import Button from "../components/Button";
import Header from "../components/Header";

export const Detail = () => {
  return (
    <>
      <Header link={'/'} title={'Detail'}/>

      <div className="p-4">
        <img src={Hotel} alt="Deskripsi Gambar" className="rounded-xl" />
        <div className="flex font-semibold text-slate-700 text-xs my-3 gap-2">
          <div className="bg-slate-100 p-2 text-center rounded-md flex items-center justify-center flex-grow">
            <FontAwesomeIcon icon={faWifi} className="mr-2" />
            <p>Free Wifi</p>
          </div>
          <div className="bg-slate-100 p-2 rounded-md flex items-center justify-center flex-grow">
            <FontAwesomeIcon icon={faMugSaucer} className="mr-2" />
            <p>Free Breakfast</p>
          </div>
          <div className="bg-slate-100 p-2 text-center rounded-md flex items-center justify-center flex-grow">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFD43B" }}
              className="mr-1 text-[14px]"
            />
            <p>5.0</p>
          </div>
        </div>
      </div>

      <div className="flex px-4 justify-between ">
        <div>
          <p className="text-lg text font-bold text-slate-700 ">
            The Aston Vill Hotel
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />{" "}
            <span className="text-xs text-slate-400">
              Alice Springs NT 0870, Australia
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-blue-600 ">
            $200.7{" "}
            <span className="text-md text-slate-400 font-normal">/night</span>
          </p>
        </div>
      </div>

      <div className="px-4 mt-4">
        <ParagrafJudul title="Deskription" />
        <p className="text-xs font-light text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          hic? Dicta itaque fugiat magni ea. Nobis, quas, nostrum recusandae
          consequuntur{" "}
          <span className="font-semibold text-sm text-blue-500">
            Read More...
          </span>
        </p>
      </div>

      <div className="p-4 ">
        <div>
          <ParagrafJudul title="Preview" />
        </div>
        <div className="mt-1 grid grid-cols-3 gap-2">
          <img src={Hotel} alt="" className="rounded-lg" />
          <img src={Hotel} alt="" className="rounded-lg" />
          <img src={Hotel} alt="" className="rounded-lg" />
        </div>
      </div>

      <div className="px-4 mt-3 mb-10">
        <Button nama="Booking Now" warna="bg-blue-500" />
      </div>
    </>
  );
};
