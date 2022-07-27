import { Badge } from "flowbite-react";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function DashboardCard07({ eventsData }) {
  const events = eventsData.events;

  return (
    <div className="col-span-full rounded-lg bg-white shadow-lg border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex justify-between">
        <h2 className="font-semibold text-slate-800">Active Events</h2>
        <Link
          to="/dashboard/events"
          className="text-sm text-slate-500 flex justify-center items-center"
        >
          See More <HiArrowRight className="ml-1" />
        </Link>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Price</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {events.map((event, idx) => {
                return (
                  <tr key={idx}>
                    <td className="p-2">
                      <div className="text-slate-800">{event.title}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{event.category.name}</div>
                    </td>
                    <td className="p-2">
                      <Badge
                        color={event.isOnline ? "info" : "gray"}
                        icon={BsFillCircleFill}
                        style={{
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        {event.isOnline ? "Online" : "Offline"}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        {event.price === "0" ? "Free" : `IDR ${event.price}`}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
