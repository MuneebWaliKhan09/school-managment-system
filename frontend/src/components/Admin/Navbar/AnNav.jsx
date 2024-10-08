import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorsAuth, logout } from "../../../store/features/regLogin";
import { Link } from "react-router-dom";
import LoaderAn from "../LoaderAn/LoaderAn";

const AnNav = () => {
  const dispatch = useDispatch();
  const { loadingAuth, msgAuth, errorAuth } = useSelector(
    (state) => state?.user?.userAuth
  );
  const { userProfile } = useSelector((state) => state?.profile?.userProfile);

  const { profileTeacher, loadingTeacher } = useSelector(
    (state) => state?.teacher?.teacherD
  );

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    dispatch(logout());
  };

  useEffect(() => {
    if (msgAuth) {
      toast.success(msgAuth);
    }
    if (errorAuth) {
      toast.error(errorAuth);
    }

    dispatch(clearErrorsAuth());
  }, [msgAuth, errorAuth, dispatch]);


  return (
    <>
      {loadingAuth && <LoaderAn />}
      {/* <!-- Navbar --> */}
      <div className="flex justify-between items-center mb-4 pr-2">
        <div className="flex items-center">
          {/* <!-- Search Element --> */}
          <form action="">
            <input
              type="text"
              className="border px-8 pr-20 outline-none py-2 rounded-full shadow-lg searchbox"
              placeholder="Search"
            />
          </form>
        </div>

        {/* <!-- Profile Section --> */}
        <div className="flex items-center gap-2">
          {/* <!-- Profile Pic --> */}
          <div onClick={toggleMenu} className="flex items-center" id="menuid">
            <div className="rounded-full border-2 border-[rebeccapurple] overflow-hidden mr-3 shadow-2xl">
              <img
                // src="/5. College Student.png"
                src={
                  (userProfile && userProfile?.avatar) ||
                  "/5. College Student.png"
                }
                alt="Profile"
                className="w-10 h-10 cursor-pointer"
              />
            </div>

            {isMenuOpen && (
              <div className="absolute right-11 mt-[15.5rem] w-48 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden z-10">
                <div className="px-4 py-2">
                  <p className="text-gray-800">
                    {(userProfile &&
                      (userProfile?.fullName?.length > 11
                        ? userProfile.fullName.slice(0, 11) + ".."
                        : userProfile.fullName[0].toUpperCase() +
                          userProfile.fullName.substr(1))) ||
                      "Teacher Name"}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {userProfile && userProfile?.email}
                  </p>
                </div>
                <div className="border-t border-gray-300"></div>
                <div className="py-1">
                  <Link
                    to="/admin-portal/admin-profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    onClick={handleLogout}
                    className="block px-4 py-2 cursor-pointer text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            )}

            {/* <!-- Profile Info --> */}
            <div>
              <p className="text-sm font-bold">
                {(userProfile &&
                  (userProfile?.fullName?.length > 11
                    ? userProfile.fullName.slice(0, 11) + ".."
                    : userProfile.fullName[0].toUpperCase() +
                      userProfile.fullName.substr(1))) ||
                  "Teacher Name"}
              </p>
              <p className="text-xs text-gray-600">
                {" "}
                {(profileTeacher && `Teacher ${profileTeacher[1]}`) ||
                  "Administrator"}
              </p>
            </div>
          </div>

          {/* <!-- Bell Icon with Notification Dot --> */}

          <div className="relative ml-4">
            <Link to='/admin-portal/admin-all-notifications'
              className="w-6 h-6 cursor-pointer relative"
            >
              <span className="fa fa-bell"></span>

              {/* Notification Dot */}
                <div className="absolute text-xs -top-1 -right-2 h-2 w-2  rounded-full flex-shrink-0 items-center flex justify-center ">
                  <i className="fa fa-plus"></i>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnNav;
