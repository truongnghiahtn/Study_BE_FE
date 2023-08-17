import React from 'react'
import EventCard from '../../components/events/eventCard'
import Header from '../../layout/header'

const EventsPage = () => {
  return (
    <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard active={true} />
    </div>
  )
}

export default EventsPage