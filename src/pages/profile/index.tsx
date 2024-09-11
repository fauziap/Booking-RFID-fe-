import {
    faArrowRightFromBracket,
    faBell,
    faLock,
    faQuestionCircle,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import MainLayout from "layouts/MainLayouts";
import ComponentManagement from "components/ComponentManagement";

const Profile = () => {
    return (
        <MainLayout documentTitle="User Profile" headerLink="/" headerTitle="Profile">
            <div className="p-4">
                <div>
                    <ComponentManagement.ParagrafJudul title="General" />
                </div>
                <ComponentManagement.ListGeneral title="Edit Profile" icon={faUser} link="/edit-profile" warna={"text-black-500"} />
                <ComponentManagement.ListGeneral warna={"text-black-500"} title="Change Password" icon={faLock} link="/change-password" />
                <ComponentManagement.ListGeneral warna={"text-black-500"} title="Notification" icon={faBell} link="/notification-settings" />
            </div>

            <div className="p-4">
                <div>
                    <ComponentManagement.ParagrafJudul title="Preferences" />
                </div>
                <ComponentManagement.ListGeneral warna={"text-black-500"}
                    title="Help & Support"
                    icon={faQuestionCircle}
                    link="/help-support"
                />
                <ComponentManagement.ListGeneral
                    title="Logout"
                    icon={faArrowRightFromBracket}
                    link="/logout"
                    warna={"text-red-500"}
                />
            </div>
        </MainLayout>
    );
};

export default Profile;
