import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Head from "../../components/Head";

const UserEvents = () => {
  return (
    <>
      <Head title="My Events">
        <meta name="description" content="My Events" />
      </Head>

      <DashboardLayout title="My Events">
        <p className="mt-1.5 text-sm text-gray-500">
          Your website has seen a 110% increase in traffic in the last
          month. Keep it up! 🚀
        </p>
      </DashboardLayout>
    </>
  );
};

export default UserEvents;
