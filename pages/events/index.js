import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month) {
			const fullPath = `/events/${year}/${month}`

			router.push(fullPath);
    }

    return (
			<div>
					<EventSearch onSearch={findEventHandler} />
					<EventList items={events} />
			</div>
    )
}

export default AllEventPage