import React, { useEffect } from 'react'
import TrNav from '../Navbar/TrNav'
import TrBanner from '../Banner/TrBanner'
import { useDispatch } from 'react-redux'
import { profileTeacher } from '../../../store/features/teacher.reducers'

const TrDash = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(profileTeacher())
  },[dispatch])
  

  return (
    <>
        {/* <!-- Main Content --> */}
    <div className="w-4/5 p-5 maincontent">
      <TrNav/>
      {/* <!-- ====================================navbar ends ========================================================= --> */}

      <TrBanner/>

      {/* <!-- ====================================================banner ends ==================================== --> */}

      {/* <!-- Main Div --> */}
      <div className="mt-4 p-4 pl-0 pr-0">
        <div className="flex gap-8 maindiv">
          {/* <!-- Left Div --> */}
          <div className="w-2/3 flex flex-col gap-5 mb-0 leftdiv1">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-lg font-bold">Finance</h3>
            </div>

            {/* <!-- Cards Section --> */}
            <div className="flex gap-4 cardsec1">
              {/* <!-- Card 1 --> */}
              <div
                className="w-64 flex bg-white flex-col items-center text-center rounded-2xl p-6 shadow-xl"
              >
                <img
                  className="mb-4"
                  src="/Frame 30.png"
                  height="40"
                  width="70"
                  alt=""
                />
                <h4 className="text-xl font-bold mb-2">$10,000</h4>
                <p>Total Payable</p>
              </div>

              {/* <!-- Card 2 --> */}
              <div
                className="w-64 bg-white flex border-2 border-[rebeccapurple] flex-col items-center text-center rounded-2xl p-6 shadow-2xl"
              >
                <img
                  className="mb-4"
                  src="/Group 14.png"
                  height="40"
                  width="70"
                  alt=""
                />
                <h4 className="text-xl font-bold mb-2">$8,500</h4>
                <p>Total Paid</p>
              </div>

              {/* <!-- Card 3 --> */}
              <div
                className="w-64 bg-white flex flex-col items-center text-center rounded-2xl p-6 shadow-xl"
              >
                <img
                  className="mb-4"
                  src="/Group 15.png"
                  height="40"
                  width="70"
                  alt=""
                />
                <h4 className="text-xl font-bold mb-2">$1,500</h4>
                <p>Remaining Balance</p>
              </div>
            </div>

            {/* <!-- Cards Section 2 --> */}
            <div className="flex justify-between items-center px-2">
              <h3 className="text-lg font-bold mt-5">Enrolled Courses</h3>
              <h4 className="text-[rebeccapurple] font-bold cursor-pointer">See all</h4>
            </div>

            <div className="flex gap-4 cardsec2">
              {/* <!-- Card 1 --> */}
              <div
                className="firstbottomdiv w-67 flex bg-[#915fe250] rounded-2xl p-4 pl-6 pr-6 shadow-xl border-2 border-[#925FE2]"
              >
                {/* <!-- left div --> */}
                <div>
                  <h4 className="text-lg text-[rebeccapurple] font-bold mb-5">
                    Python Programming
                  </h4>
                  <button
                    className="px-7 py-1 font-bold mb-2 bg-[rebeccapurple] text-white rounded-full"
                  >
                    Veiw
                  </button>
                </div>

                {/* <!-- right div 1--> */}
                <div>
                  <img
                    src="/Icon Container.png"
                    width="120"
                    height="120"
                    alt="Computer"
                  />
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div
                className="firstbottomdiv w-67 flex bg-[#915fe250] rounded-2xl p-4 pl-6 pr-6 shadow-xl"
              >
                {/* <!-- left div --> */}
                <div>
                  <h4 className="text-lg text-[rebeccapurple] font-bold mb-5">
                    Javascript Programming
                  </h4>
                  <button
                    className="px-7 mb-2 py-1 font-bold bg-[rebeccapurple] text-white rounded-full"
                  >
                    Veiw
                  </button>
                </div>

                {/* <!-- right div 2--> */}
                <div>
                  <img
                    src="/Group 16.png"
                    height="100"
                    width="100"
                    alt="Computer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Div --> */}
          <div className="w-1/3 rightdivP">
            {/* <!-- Top Div --> */}
            <div className="flex flex-col gap-5 px-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mb-2">Course Instructors</h3>
              </div>

              <div className="flex items-center gap-4">
                {/* <!-- Avatar 1 --> */}
                <div
                  className="border-2 border-[rebeccapurple] overflow-hidden rounded-full"
                >
                  <img
                    className="w-14 h-14"
                    src="/5. College Student.png"
                    alt=""
                  />
                </div>
                {/* <!-- Avatar 2 --> */}
                <div
                  className="border-2 border-[rebeccapurple] overflow-hidden rounded-full"
                >
                  <img
                    className="w-14 h-14"
                    src="/5. College Student.png"
                    alt=""
                  />
                </div>
                {/* <!-- Avatar 3 --> */}
                <div
                  className="border-2 border-[rebeccapurple] overflow-hidden rounded-full"
                >
                  <img
                    className="w-14 h-14"
                    src="/5. College Student.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <h3 className="text-lg font-bold">Daily Notice</h3>
                <h4 className="text-[rebeccapurple] font-bold cursor-pointer">See all</h4>
              </div>
            </div>

            {/* <!-- Bottom Div --> */}
            <div
              className="p-8 flex flex-col gap-8 shadow-xl mt-5 rounded-xl bg-white"
            >
              {/* <!-- Top Div --> */}
              <div>
                <h4 className="text-md font-bold mb-2">Exam Schedule</h4>
                <p className="mb-3">
                  2 lines of Lorem Ipsum random text Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Sapiente, modi.
                </p>
                <h4 className="text-gray-500 cursor-pointer font-bold">See More</h4>
              </div>

              {/* <!-- Bottom Div --> */}
              <div>
                <h4 className="text-md font-bold mb-2">Exam Schedule</h4>
                <p className="mb-3">
                  2 lines of Lorem Ipsum random text. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <h4 className="text-gray-500 cursor-pointer font-bold">See More</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default TrDash
