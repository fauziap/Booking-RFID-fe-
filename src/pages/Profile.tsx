import {
  faArrowRightFromBracket,
  faBell,
  faLock,
  faQuestionCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MainLayout from "layouts/MainLayouts";
import ParagrafJudul from "components/ParagrafJudul";
import ListGeneral from "components/ListGeneral";
import Header from "components/Header";

export const Profile = () => {
  return (
    <MainLayout>

      <Header link={'/'} title={'Settings'}/>

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
          link="/logout"
          warna={"text-red-500"}
        />
      </div>

    </MainLayout>
  );
};
