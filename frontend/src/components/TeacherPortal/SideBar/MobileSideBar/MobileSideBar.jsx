import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearErrorsAuth, logout } from "../../../../store/features/regLogin";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const MobileSideBar = () => {
  const dispatch = useDispatch();
  const { loadingAuth, msgAuth, errorAuth } = useSelector(
    (state) => state?.user?.userAuth
  );
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
  }, [msgAuth, errorAuth]);

  return (
    <>
      {/* <!-- small menu --> */}
      <div className="small">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu" className="menutr">
              <div className="w-100 flex items-center justify-center pt-2 h-32">
                <img
                  src="/public/Frame 47.png"
                  height="50"
                  width="100"
                  alt=""
                />
              </div>

              {/* <!-- icons div --> */}
              <div className="w-100 flex mt-14 pb-5 flex-col justify-between h-[93vh] pl-7">
                <div className="flex flex-col gap-10">
                  <div className="flex gap-5 items-center">
                    <a>
                      <i
                        className="fa-brands fa-windows"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/teacher-dash"
                      className="cursor-pointer font-semibold"
                    >
                      Dashboard
                    </Link>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a>
                      <i
                        className="fa fa-graduation-cap"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/teacher-students"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Class Students
                    </Link>
                  </div>

                  <div className="flex gap-3 items-center">
                    <a>
                      <i
                        className="fa fa-chalkboard-teacher mr-[2px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/all-class-teachers"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Class Teachers
                    </Link>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a>
                      <i
                        className="fa fa-book-open mr-[1px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/all-class-subjects"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Class Subjects
                    </Link>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a>
                      <i
                        className="fa fa-book-open mr-[1px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/take-attendance-student"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Take Attendance
                    </Link>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a>
                      <i
                        className="fa fa-file-alt mr-[1px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/give-assigments-class"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Assignments
                    </Link>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a>
                      <i
                        className="fa fa-bell mr-[1px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/teacher-portal/all-notification-class"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Notifications
                    </Link>
                  </div>

                  <div className="flex gap-5 items-center">
                    <a>
                      <i
                        className="fa fa-file-excel mr-[3px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/dashboard"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Drop Semisters
                    </Link>
                  </div>

                  <div className="flex gap-5 items-center">
                    <a>
                      <i
                        className="fa fa-square-poll-vertical mr-[1px]"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                    <Link
                      to="/dashboard"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Results
                    </Link>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a>
                      <i
                        className="fa fa-message mr-[3px]"
                        style={{ color: "#ffffff" }}
                      >
                        {" "}
                      </i>
                    </a>
                    <Link
                      to="/dashboard"
                      className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all"
                    >
                      Notice
                    </Link>
                  </div>
                </div>

                {/* <!-- logout div --> */}
                <div onClick={handleLogout} className="flex gap-4 items-center">
                  <a>
                    <i
                      className="fa fa-right-from-bracket mr-[3px]"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                  <a className="cursor-pointer font-semibold text-gray-200 hover:text-white transition-all">
                    {loadingAuth ? "Logging out..." : "Logout"}
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileSideBar;
