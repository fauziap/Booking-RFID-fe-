import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


type TypeProps = {
  title: string;
  icon: IconProp;
  link: string;
  warna?: string;
};

const ListGeneral = (prop: TypeProps) => {
  const { title, icon, link, warna } = prop;
  return (
    <NavLink to={link}>
      <div className="flex justify-between items-center rounded-lg mt-4 p-4 shadow-md bg-white border border-gray-100 transition-all hover:shadow-lg hover:bg-gray-50">
        <div className={`flex items-center ${warna ?? ""}`}>
          <FontAwesomeIcon
            icon={icon}
            className="text-lg mr-4 "
          />
          <p className="font-semibold ">{title}</p>
        </div>
        <div className="text-gray-500">
          <FontAwesomeIcon icon={faAngleRight} className="text-lg" />
        </div>
      </div>
    </NavLink>
  );
};

export default ListGeneral;
