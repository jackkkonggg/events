import React from 'react';
import EventDetail from './EventDetail'

function EventPage(match) {
    React.useEffect(() => {
        fetchEvents();
    });
    const [events, setEvents] = React.useState([]);
    const fetchEvents = async () => {
        const data = await fetch("https://5eba86b13f97140016992939.mockapi.io/events");
        const items = await data.json();
        setEvents(items);
    }
    return (
        <div className="detailPage">
            {events.filter(event => {
                return event.id === match.match.params.id;
            }).map(element => {
                return (
                    <EventDetail
                        key = {element.id}
                        name = {element.name}
                        url = {element.banner_url}
                        start = {element.start_at}
                        end = {element.end_at}
                    />
                );
            })}
        </div>
    )
}

export default EventPage;
