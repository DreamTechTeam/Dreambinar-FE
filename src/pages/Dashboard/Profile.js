import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Head from "../../components/Head";

const Profile = () => {
  return (
    <>
      <Head title="Profile">
        <meta name="description" content="Profile" />
      </Head>

      <DashboardLayout title="Profile">
        <p className="mt-1.5 text-sm text-gray-500">
          Your website has seen a 110% increase in traffic in the last
          month. Keep it up! 🚀
        </p>
      </DashboardLayout>
    </>
  );
};

export default Profile;
