import { Badge, Button, Pagination, Table } from "flowbite-react";
import { BsFillCircleFill } from "react-icons/bs";
import { HiPlus, HiTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/Dashboard/DasboardLayout";
import Head from "../../components/Head";
import { eventsData } from "../../utils/db";

const UserEvents = () => {
  const navigate = useNavigate();
  const events = eventsData.events;

  return (
    <>
      <Head title="My Events" />

      <DashboardLayout>
        <div className="p-6 md:p-8 xl:p-10 bg-white rounded-lg">
          <div className="grid lg:grid-cols-2 grid-rows-1 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
                My Events
              </h1>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </p>
            </div>
            <div className="flex lg:justify-end lg:items-center">
              <Button onClick={() => navigate("/dashboard/events/add")}>
                Create Event
                <HiPlus className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <Table hoverable={true}>
              <Table.Head>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>
                  Draft
                </Table.HeadCell>
                <Table.HeadCell>Approve</Table.HeadCell>
                <Table.HeadCell>
                  Category
                </Table.HeadCell>
                <Table.HeadCell>
                  Type
                </Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {events.map((event, idx) => {
                  return (
                    <Table.Row
                      key={idx}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {event.title}
                      </Table.Cell>
                      <Table.Cell>
                        {event.isDraft ? "Yes" : "No"}
                      </Table.Cell>
                      <Table.Cell>
                        <Badge
                          color={event.isApprove ? "success" : "failure"}
                          icon={BsFillCircleFill}
                          style={{
                            textAlign: "center",
                            justifyContent: "center",
                          }}
                        >
                          {event.isApprove ? "Approved" : "Rejected"}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        {event.category.name}
                      </Table.Cell>
                      <Table.Cell>
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
                      </Table.Cell>
                      <Table.Cell>
                        {event.price === "0" ? "Free" : `IDR ${event.price}`}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-cols gap-2">
                          <Button color="light">
                            <HiOutlinePencilAlt />
                          </Button>
                          <Button color="failure">
                            <HiTrash />
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>

          <div className="mt-6">
            <Pagination
              currentPage={1}
              totalPages={2}
              // onPageChange={onPageChange}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default UserEvents;
