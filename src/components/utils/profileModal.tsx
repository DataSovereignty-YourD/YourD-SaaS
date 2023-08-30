import {
  PiPencilSimpleLineLight,
  PiUserListDuotone,
  PiWechatLogoBold,
  PiUserCircle,
} from "react-icons/pi";
import {
  AiOutlineWallet,
  AiOutlineQuestionCircle,
  AiOutlineLock,
  AiOutlineUnorderedList,
  AiOutlineSetting,
} from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { BiLogOut } from "react-icons/bi";

export default function ProfileModal({
  isProfileToggle,
  setProfileToggle,
  isLoggedIn,
  setLoggedIn,
  selectedItem,
  setSelectedItem,
  activeTab,
  setActiveTab,
  navigation,
}) {
  if (!isProfileToggle) return null;
  //   const [selectedItem, setSelectedItem] = useState(null);
  //   const [activeTab, setActiveTab] = useState("profile");
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const handleLogout = () => {
    navigation("/");
    setLoggedIn(!isLoggedIn);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const ProfileData = [
    {
      name: "Edit Profile",
      icon: <PiPencilSimpleLineLight size={15} />,
    },
    {
      name: "View Profile",
      icon: <GoPerson size={15} />,
    },
    {
      name: "Social Profile",
      icon: <PiUserListDuotone size={15} />,
    },
    {
      name: "Billing",
      icon: <AiOutlineWallet size={15} />,
    },
  ];
  const SettingData = [
    {
      name: "Support",
      icon: <AiOutlineQuestionCircle size={15} />,
    },
    {
      name: "Account Settings",
      icon: <GoPerson size={15} />,
    },
    {
      name: "Privacy Center",
      icon: <AiOutlineLock size={15} />,
    },
    {
      name: "Feedback",
      icon: <PiWechatLogoBold size={15} />,
    },
    {
      name: "History",
      icon: <AiOutlineUnorderedList size={15} />,
    },
  ];

  const ProfileContent = () => {
    return (
      <div className="">
        {ProfileData.map((profiledata, index) => {
          return (
            <div className=" flex  gap-2 border-gray-100  justify-between items-center  text-black ">
              <a
                href="#"
                key={index}
                className={` w-full py-3 text-gray-800  ${
                  selectedItem === index ? "bg-blue-100" : ""
                } hover:bg-blue-200 transition duration-300`}
                onClick={() => handleItemClick(index)}
              >
                <div className=" flex">
                  <div className=" object-contain  my-auto mx-4 ">
                    {profiledata.icon}
                  </div>
                  <div className=" sm:min-w-[200px]  font-light text-xs sm:text-sm lg:min-w-[200px] lg:whitespace-nowrap ">
                    {profiledata.name}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
        <div className="flex border-gray-100  justify-between items-center  text-black  ">
          <button
            className={`w-full py-3 text-gray-800  ${
              selectedItem == "#" ? "bg-blue-100" : ""
            } hover:bg-blue-200 transition duration-300`}
            onClick={() => handleItemClick("#")}
          >
            <div className="  flex " onClick={handleLogout}>
              <div className=" object-contain  my-auto mx-4 ">
                <BiLogOut />
              </div>

              <div className=" sm:min-w-[200px] text-left  font-light text-xs sm:text-sm lg:min-w-[200px] lg:whitespace-nowrap ">
                Logout
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  };

  const SettingContent = () => {
    return (
      <div className="">
        {SettingData.map((settingdata, index) => {
          return (
            <div className="flex  gap-2 border-gray-100  justify-between items-center  text-black  ">
              <a
                href="#"
                key={index}
                className={`w-full py-3 text-gray-800  ${
                  selectedItem === index ? "bg-blue-100" : ""
                } hover:bg-blue-200 transition duration-300`}
                onClick={() => handleItemClick(index)}
              >
                <div className="flex">
                  <div className="object-contain  my-auto mx-4 ">
                    {settingdata.icon}
                  </div>
                  <div className="sm:min-w-[200px]  font-light text-xs sm:text-sm lg:min-w-[200px] lg:whitespace-nowrap ">
                    {settingdata.name}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className=" absolute w-72 h-fit   bg-white menu dropdown-content shadow-2xl z-[1] bg-base-100 rounded-md"
      style={{ transform: "translateX(-80%)" }}
    >
      <div className="  items-center flex text-xl w-full py-6 ">
        <PiUserCircle size={28} className="ml-4 mr-2" />
        <div className=" flex items-center justify-between w-full">
          <div className=" font-normal text-sm ">User Name</div>
          <BiLogOut size={20} className="mx-5" onClick={handleLogout} />
        </div>
      </div>
      <div className=" ">
        <div className=" flex justify-between w-full ">
          <button
            className={` flex items-center justify-center  w-[calc(50% - 0.25rem)] px-4 py-2  w-full  font-normal text-sm border-b-2 ${
              activeTab === "profile"
                ? "bg-white border-b-2 border-blue-500 text-blue-500  "
                : "hover:bg-gray-100 border-b-2 border-transparent text-black "
            } `}
            type="button"
            onClick={() => handleTabChange("profile")}
          >
            <GoPerson className="mx-2" />
            Profile
          </button>
          <button
            className={` flex items-center justify-center w-[calc(50% - 0.25rem)] px-4 py-2  w-full  font-normal text-sm border-b-2 ${
              activeTab === "setting"
                ? "bg-white border-blue-500 text-blue-500 "
                : "hover:bg-gray-100 text-black border-transparent"
            } `}
            type="button"
            onClick={() => handleTabChange("setting")}
          >
            <AiOutlineSetting className="mx-2 " />
            Setting
          </button>
        </div>
        <div className=" ">
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "setting" && <SettingContent />}
        </div>
      </div>
    </div>
  );
}
