import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {

	return (
		<ul className={classes.list}>
			{props.items.map(event => <EventItem key={Math.random()} item={event} />)}
		</ul>
	);
}

export default EventList