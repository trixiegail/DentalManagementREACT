import React, { useState } from "react"

export default function SideNavigationSearchBar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  return (
    <>
      
      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-3"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-[#F7C301] bg-[#88343B] transition-transform lg:translate-x-0`}
      >
        <a
          className="flex flex-col items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none justify-center"
          href="/dashboard"
        >
          <img
            className="h-20 w-auto"
            src="src/image/cit logo.png"
            alt="Your Company"
          />
          <h1 className="text-white font-bold uppercase text-2xl tracking-wide">Admin</h1>
        </a>
        <div className="border-b border-[#F7C301] ">
          
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <a
                  href="/dashboard"
                  className="flex items-center gap-3 rounded p-3 text-[#F7C301] transition-colors hover:bg-[#F7C301] hover:text-[#88343B] focus:bg-[#F7C301] aria-[current=page]:bg-[#F7C301] aria-[current=page]:text-[#88343B] "
                >
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/student-accounts"
                  className="flex items-center gap-3 rounded p-3 text-[#F7C301] transition-colors hover:bg-[#F7C301] hover:text-[#88343B] focus:bg-[#F7C301] aria-[current=page]:bg-[#F7C301]  aria-[current=page]:text-[#88343B] "
                >
                  <div className="flex items-center self-center ">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Students
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/staff-accounts"
                  className="flex items-center gap-3 rounded p-3 text-[#F7C301] transition-colors hover:bg-[#F7C301] hover:text-[#88343B] focus:bg-[#F7C301] aria-[current=page]:bg-[#F7C301]  aria-[current=page]:text-[#88343B] "
                >
                  <div className="flex items-center self-center ">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Staffs
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/nurse-accounts"
                  className="flex items-center gap-3 rounded p-3 text-[#F7C301] transition-colors hover:bg-[#F7C301] hover:text-[#88343B] focus:bg-[#F7C301] aria-[current=page]:bg-[#F7C301]  aria-[current=page]:text-[#88343B] "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Nurses
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/doctor-accounts"
                  className="flex items-center gap-3 rounded p-3 text-[#F7C301] transition-colors hover:bg-[#F7C301] hover:text-[#88343B] focus:bg-[#F7C301] aria-[current=page]:bg-[#F7C301]  aria-[current=page]:text-[#88343B] "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Doctors
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <footer className="border-t border-[#F7C301] p-3">
          <button
            onClick={() => document.getElementById('logout_modal').showModal()}
            className="flex w-full items-center gap-3 rounded p-3 text-[#F7C301] transition-colors hover:text-[#F7C301]"
          >
            <div className="flex items-center self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
              Logout
            </div>
          </button>

          <dialog id="logout_modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Logout</h3>
              <p className="py-4">Are you sure you want to logout?</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn mr-2">Cancel</button>
                </form>
                <a href="/login-admin" className="btn bg-[#F7C301] rounded hover:bg-yellow-600">Logout</a>
              </div>
            </div>
          </dialog>
        </footer>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Side navigation menu with search bar and alert message --> */}
    </>
  )
}
