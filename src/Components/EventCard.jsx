import { useContext } from "react";
import { EventContext } from "./Fetch";
import React from "react";
import styles from "./EventCard.module.css";
import { Link, useLocation } from "react-router-dom";

function EventCard(props) {
  //Hämta state via useContext
  const { filteredResults } = useContext(EventContext);
  //Renderar eventcard
  return (
    <section>
      {props.event.map((event, index) => (
        <section key={index}>
          <Link to="/ticket" state={{ from: { filteredResults } }}>
            <section className={styles.eventsContainer}>
              <article className={styles.dateEvent}>
                <span>{event.when.date}</span>
              </article>

              <article>
                <h2 className={styles.nameEvent}>{event.name}</h2>
                <span className={styles.whereEvent}>{event.where}</span>

                <article className={styles.eventMeta}>
                  <p className={styles.eventTime}>
                    {event.when.from} - {event.when.to}
                  </p>
                  <h4 className={styles.eventPrice}>{event.price} SEK</h4>
                </article>
              </article>
            </section>
          </Link>
        </section>
      ))}
    </section>
  );
}

export default EventCard;
