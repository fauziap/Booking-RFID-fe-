import { faCamera, faEnvelope, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditProfile = () => {
  return (
    <>
      <Header link="/" title="Edit Profile" />
      <div className="container mx-auto mt-5 p-4">
        <form className="space-y-4">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="relative text-center">
              <label htmlFor="profilePic" className="cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src=""
                    alt="Profile"
                    className="w-full h-full  rounded-full object-cover"
                  />

                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="text-[200px] w-full -ml-10 text-gray-500"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCamera}
                  className="absolute bottom-0 right-0 text-blue-500 text-xl bg-white rounded-full p-1"
                />
              </label>
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange=""
                className="hidden"
              />
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-semibold">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 border border-gray-300 w-full rounded-lg pl-10"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                Email or Phone Number
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border w-full border-gray-300 rounded-lg pl-10"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>
          </div>
    <div className="bottom-0">
          <button
            type="submit"
            className="bg-blue-500 py-3 px-4 bottom-0 rounded-lg font-semibold text-lg text-white w-full"
          >
            Save Changes
          </button>
    </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
