import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import AnNav from "../../../Navbar/AnNav";
import {
  adminFetchSingleStudent,
  adminUpdateSingleStudentAvatar,
  clearErrorStudents,
} from "../../../../../store/features/admin.reducers";
import LoaderAn from "../../../LoaderAn/LoaderAn";

const StDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { allSt, errSt, msgSt, loadingSt, singleSt } = useSelector(
    (state) => state.admin.students
  );

  const [Avatar, setAvatar] = useState("");
  const [avatarPreveiw, setAvatarPreveiw] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(adminFetchSingleStudent(params?.id));
  }, [params?.id, dispatch]);

  const {
    fullName,
    rollNo,
    age,
    className,
    fatherName,
    gender,
    DOB,
    monthlyFee,
    securityFee,
    labFee,
    joiningDate,
    bloodGroup,
    email,
    address,
    phone,
    academicHistory,
    avatar,
  } = singleSt && singleSt ? singleSt : "";

  const handleAvatarSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("avatar", Avatar);
    dispatch(
      adminUpdateSingleStudentAvatar({ id: params?.id, data: formdata })
    );
  };

  const handleAcademicRecord = () => {
    navigate(`/admin-portal/admin-academic-record-student/${params?.id}`);
  };

  useEffect(() => {
    if (msgSt) {
      toast.success(msgSt);
      dispatch(adminFetchSingleStudent(params?.id));
      setAvatarPreveiw(null);
    }
    if (errSt) {
      toast.error(errSt);
    }
    dispatch(clearErrorStudents());
  }, [msgSt, errSt, dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    const veiwImg = URL.createObjectURL(file);
    setAvatarPreveiw(veiwImg);
  };

  const handleModalShow = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-75 flex items-center z-50 justify-center transition-all">
          <div className="bg-white p-4 rounded-md">
            <img
              className="object-contain h-[30rem] w-[30rem]"
              src={avatarPreveiw || avatar}
              alt="Full View"
            />
            <button
              onClick={handleModalClose}
              className="absolute top-5 right-5 text-white py-2 px-3 bg-[#00000052] rounded-full"
            >
              <i className="fa fa-times font-extrabold"></i>
            </button>
          </div>
        </div>
      )}

      <div className="p-[1.25rem] w-4/5 navdashMain">
        <AnNav />
        {loadingSt ? (
          <LoaderAn />
        ) : (
          <div className=" w-[100%] stprofile relative shadow-lg border-2 border-[#8b008b94] shadow-[#8b008bbd]  rounded-md p-6 overflow-hidden mt-6">
            {/* small menu */}
            <div className=" absolute top-0 right-0 text-black m-4 text-sm z-50">
              <button
                onClick={handleMenuClick}
                className="py-2 px-4 text-[1.125rem] rounded-full shadow-[#8b008bbd] shadow-md focus:outline-none transition duration-300 transform hover:scale-105"
              >
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              {isMenuOpen && (
                <div className="origin-top-right z-50 absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <p
                      onClick={handleAcademicRecord}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Academic History
                    </p>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile History
                    </Link>
                    {/* Add more menu items as needed */}
                  </div>
                </div>
              )}
            </div>

            {/* avatar + fullname + rollno */}
            <div className="flex  flex-col gap-1 justify-center items-center ">
              <div className="relative group">
                {/* Hidden input for choosing a new image */}
                <input
                  type="file"
                  id="avatarInput"
                  name="avatar"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <img
                  onClick={handleModalShow}
                  className="object-cover object-center w-[120px] h-[120px] rounded-full cursor-pointer"
                  src={avatarPreveiw ? avatarPreveiw : avatar}
                  alt={`${fullName} Avatar`}
                />
                {/* Pen icon */}
                <div className="absolute text-xs bg-[#00000054] top-0 right-0 group-hover:opacity-100 p-2 opacity-50 transition-opacity duration-300">
                  {/* Font Awesome pen icon */}
                  <label htmlFor="avatarInput">
                    <i className="fas fa-pen text-white cursor-pointer"></i>
                  </label>
                </div>
              </div>
              {avatarPreveiw && avatarPreveiw ? (
                <div className="flex justify-center items-center mt-2 mb-3 text-sm">
                  <button
                    onClick={handleAvatarSubmit}
                    className="bg-gradient-to-r from-[#8b008bef] to-[#861686e8]  text-white hover:bg-slate-100 border-2 hover:border-2  py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <>
                  <h2 className=" text-xl font-semibold text-gray-800 mb-2">
                    {fullName}
                  </h2>
                  <p className="text-gray-600 mb-4">Roll No: {rollNo}</p>
                </>
              )}
            </div>

            {/* remaining student details */}
            <div>
              <table className="w-full">
                <tbody className=" text-sm">
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Age:</td>
                    <td>{age}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Class:</td>
                    <td>{className?.className}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Father's Name:</td>
                    <td>{fatherName}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Gender:</td>
                    <td>{gender}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Date of Birth:</td>
                    <td>
                      {DOB &&
                        new Date(DOB).toLocaleString("en-US", {
                          year: "numeric",
                          day: "numeric",
                          month: "long",
                        })}
                    </td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Monthly Fee:</td>
                    <td>{monthlyFee}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Security Fee:</td>
                    <td>{securityFee}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Lab Fee:</td>
                    <td>{labFee}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Joining Date:</td>
                    <td>
                      {joiningDate &&
                        new Date(joiningDate).toLocaleString("en-US", {
                          year: "numeric",
                          day: "numeric",
                          month: "long",
                        })}
                    </td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Blood Group:</td>
                    <td>{bloodGroup}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Email:</td>
                    <td>{email}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Address:</td>
                    <td>{address}</td>
                  </tr>
                  <tr className="border-2 mb-2">
                    <td className="font-semibold p-2">Phone:</td>
                    <td>{phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StDetails;
