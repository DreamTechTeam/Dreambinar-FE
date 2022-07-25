import React from 'react';
import Icon from '../../images/icon-01.svg';

function DashboardCard01() {
  return (
    <div className="flex flex-col col-span-full rounded-lg sm:col-span-6 xl:col-span-4 bg-white shadow-lg border border-slate-200">
      <div className="px-5 py-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Active Events</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">10</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
