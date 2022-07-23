import { Dropdown } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideNavbar from "../../components/Dashboard/Sidebar";

const DashboardLayout = ({ title, children }) => {
  const navigate = useNavigate()

  const onLogout = (e) => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
  
      toast.success("Logout Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-gray-50 h-screen w-screen">
      <SideNavbar />
      <div className="lg:ml-60">
        <header>
          <div className="max-w-screen-md xl:max-w-screen-xl 2xl:max-w-[141rem] px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start lg:justify-end gap-4">
              <Dropdown
              label={
                  <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://www.hyperui.dev/photos/man-4.jpeg"
                  alt="Simon Lewis"
                />
              }
              size="sm"
              inline={true}
              >
                <Dropdown.Item onClick={() => navigate("/dashboard")}>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/dash/events")}>
                  Events
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/dash/profile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={onLogout}>
                  <span className="text-red-800">Logout</span>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="mt-8">
                {/* Content Start */}
                <main>
                  <h1 className="text-2xl font-black font-sans text-gray-900 sm:text-3xl">
                    {title}
                  </h1>
                  {children}
                </main>
            {/* Content Start */}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardLayout;
