import React from 'react';

// Import utilities

function DashboardCard03() {

  return (
    <div className="flex flex-col col-span-full rounded-lg sm:col-span-6 xl:col-span-4 bg-white shadow-lg border border-slate-200">
      <div className="px-5 py-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Rejected Events</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">1</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
