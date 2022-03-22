import { createContext, useState, useEffect } from "react";

export const EventContext = createContext();
export const Fetch = (props) => {
  //Sätter variabler till useState
  const [filteredResults, setFilteredResults] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nrTicket, setNrTicket] = useState(0);
  const [events, setEvents] = useState([]);
  const [orderArray, setOrderArray] = useState([]);

  const url = "https://my-json-server.typicode.com/majazocom/events/events";

  //Fetcha datan, sätt datan till "Events"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        filteredResults,
        setFilteredResults,
        totalPrice,
        setTotalPrice,
        nrTicket,
        setNrTicket,
        orderArray,
        setOrderArray,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
export default Fetch;
