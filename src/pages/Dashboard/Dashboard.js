import React from "react";

import DashboardLayout from "../../components/Dashboard/DasboardLayout";
import Head from "../../components/Head";
import DashboardCard01 from "../../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../../partials/dashboard/DashboardCard03";
import DashboardCard07 from "../../partials/dashboard/DashboardCard07";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import { eventsData } from "../../utils/db";

function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <DashboardLayout>
        {/* Welcome banner */}
        <WelcomeBanner />

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Acme Plus) */}
          <DashboardCard01 />
          {/* Line chart (Acme Advanced) */}
          <DashboardCard02 />
          {/* Line chart (Acme Professional) */}
          <DashboardCard03 />
          {/* Table (Top Channels) */}
          <DashboardCard07 eventsData={eventsData} />
        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
