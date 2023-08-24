import React from 'react'
import EventCard from '../../components/events/eventCard'
import Header from '../../layout/header'
import Footer from "../../layout/footer"

const EventsPage = () => {
  return (
    <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard active={true} />
        <Footer/>
    </div>
  )
}

export default EventsPage