import { useContext } from "react";
import EventCard from "../Components/EventCard";
import { EventContext } from "../Components/Fetch";

export default function Event(props) {
  //Variabler
  //Hämta state via useContext
  const { filteredResults, setFilteredResults, events, setEvents } =
    useContext(EventContext);
  let eventValue;
  let newEventList;

  //Funktion för sökfunktionen, filtrerar input från sökningen på eventlistan
  function searchItems(e) {
    let eventList = [...events];
    eventValue = e.target.value.toLowerCase();
    newEventList = eventList.filter((event) =>
      event.name.toLowerCase().includes(eventValue)
    );
    //Sätter state från sökresultatet
    setFilteredResults(newEventList);
  }

  return (
    <EventContext.Provider
      value={{
        filteredResults,
        setFilteredResults,
        events,
        setEvents,
        newEventList,
      }}
    >
      {props.children}

      <section className="container">
        <h1 className="title">Events</h1>
        <input
          className="search"
          type="search"
          placeholder="Sök Event"
          onChange={(e) => searchItems(e)}
        />  
        {/* Skapar innehåll för varje objekt i events-listan */}
        {filteredResults.map((event, index) => (
          <article onClick={() => event.name.toLowerCase()} key={index}>
            <EventCard event={filteredResults} />
          </article>
        ))}
      </section>
    </EventContext.Provider>
  );
}
