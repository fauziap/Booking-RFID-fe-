import { faAngleLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


type TypeProps = {
  link: string
  title: string
}

const Header = (prop: TypeProps) => {
  const { link, title } = prop
  return (
    <div className="flex justify-between items-center p-4 bg-white border-gray-200">
      <NavLink to={link}>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
          <FontAwesomeIcon icon={faAngleLeft} className="text-lg" />
        </button>
      </NavLink>
      <p className="text-lg font-semibold">{title}</p>
      <button className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
        <FontAwesomeIcon icon={faEllipsisV} className="text-lg" />
      </button>
    </div>
  );
};

export default Header;
