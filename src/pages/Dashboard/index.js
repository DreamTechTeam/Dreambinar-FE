import React from "react";
import SideNavbar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 h-screen w-screen">
      <SideNavbar />
      <div className="lg:ml-60">
        <header>
          <div className="max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start lg:justify-end gap-4">
              <a href="/" className="block shrink-0">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://www.hyperui.dev/photos/man-4.jpeg"
                  alt="Simon Lewis"
                />
              </a>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, Barry!
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">
                Your website has seen a 52% increase in traffic in the last
                month. Keep it up! 🚀
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Dashboard;
