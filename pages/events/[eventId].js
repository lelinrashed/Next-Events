import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummery from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
	const router = useRouter();

	const event = getEventById(router.query.eventId);

	if(!event) {
		return <p>No event found!</p>
	}

	return (
			<>
				<EventSummery title={event.title} />
				<EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
				<EventContent>
					<p>{event.description}</p>
				</EventContent>
			</>
	)
}

export default EventDetailPage