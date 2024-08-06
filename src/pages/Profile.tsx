import {
  faAngleLeft,
  faAngleRight,
  faArrowRightFromBracket,
  faBell,
  faCog,
  faEllipsisV,
  faLock,
  faQuestionCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MobileNavigations from "../components/mobileNavigations";
import MainLayout from "../Layouts/MainLayouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParagrafJudul from "../components/ParagrafJudul";
import ListGeneral from "../components/ListGeneral";

export const Profile = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex justify-between items-center p-4 bg-white border-gray-200">
          <button className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            <FontAwesomeIcon icon={faAngleLeft} className="text-lg" />
          </button>
          <p className="text-lg font-semibold">Settings</p>
          <button className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            <FontAwesomeIcon icon={faEllipsisV} className="text-lg" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div>
          <ParagrafJudul title="General" />
        </div>
        <ListGeneral title="Edit Profile" icon={faUser} link="/edit-profile" />
        <ListGeneral
          title="Change Password"
          icon={faLock}
          link="/change-password"
        />
        <ListGeneral
          title="Notification"
          icon={faBell}
          link="/notification-settings"
        />
        <ListGeneral
          title="Notification"
          icon={faBell}
          link="/notification-settings"
        />
      </div>

      <div className="p-4">
        <div>
          <ParagrafJudul title="Preferences" />
        </div>
        <ListGeneral
          title="Help & Support"
          icon={faQuestionCircle}
          link="/help-support"
        />
        <ListGeneral
          title="Logout"
          icon={faArrowRightFromBracket}
          link="/help-support"
          warna={"text-red-500"}
        />
      </div>

      {/* <MobileNavigations /> */}
    </MainLayout>
  );
};
