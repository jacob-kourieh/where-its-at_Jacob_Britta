import { useEffect } from "react";
import { useState, useContext, createContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { EventContext } from "./Fetch";
import styles from "./Ticket.module.css";

let getPrice;
export default function AddButton(props) {
  //Hämta variabler via useContext
  const { totalPrice, setTotalPrice, nrTicket, setNrTicket } =
    useContext(EventContext);

  //Funktion som hämtar priset
  function getPriceFunction(props) {
    props.price.filteredResults.map((item) => {
      getPrice = item.price;
    });
  }
  const [price, setPrice] = useState(getPrice);

  //Funktioner som sätter och beräknar antal biljetter, och totalpris
  function addButton() {
    setNrTicket(nrTicket + 1);
    setPrice(price);
    setTotalPrice((prev) => prev + price);
  }
  function subButton() {
    if (nrTicket > 0) {
      setNrTicket(nrTicket - 1);
      setPrice(price);
      setTotalPrice((prev) => prev - price);
    }
  }

  //Nollställ state
  useEffect(() => {
    setNrTicket(0);
    setTotalPrice(0);
  }, []);

  //Kalla på funktionen som hämtar priset
  getPriceFunction(props);
  return (
    <section className={styles.tickets}>
      <h1 className={styles.FirstPrice}>{totalPrice} kr </h1>
      <section className={styles.ticketAmount}>
        <button className={styles.LeftBtn} onClick={subButton}>
          -
        </button>
        <span>{nrTicket} st</span>
        <button className={styles.RightBtn} onClick={addButton}>
          +
        </button>
      </section>
    </section>
  );
}
