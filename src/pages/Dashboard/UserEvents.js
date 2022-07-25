import { Link } from "react-router-dom";
import DashboardLayout from "../../components/Dashboard/DasboardLayout";
import Datepicker from "../../partials/actions/Datepicker";

const UserEvents = () => {
    return (
        <DashboardLayout>
            <h1>Hello User Events</h1>
            <Datepicker />
            <Link to="/dashboard/events/add" className="rounded-md bg-sky-400 p-1 text-white hover:bg-sky-400 focus:ring-2 active:bg-sky-300">Create Event</Link>
        </DashboardLayout>
    )
}

export default UserEvents;