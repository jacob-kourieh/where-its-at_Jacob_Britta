import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../Components/Fetch";
import styles from "./Receipt.module.css";
import BackIcon from "../img/BackIcon.svg";

//Variabler
let seatNr;
let randomSeaction;
let section = ["A", "B", "C", "D", "E", "F"];
let receiptItem;

function Receipt() {
  // Hämta state (orderArray) via useContext
  const { orderArray } = useContext(EventContext);

  //Sätt receiptItem till senaste eventet som är tillagt i orderArray
  orderArray.forEach((event) => {
    receiptItem = event;
  });

  //funktion som ger random värde för sittplats och sektion.
  function randomNumber() {
    seatNr = Math.floor(Math.random() * 500);
    randomSeaction = section[Math.floor(Math.random() * section.length)];
  }

  randomNumber();

  return (
    <section>
      <Link to="/Event">
        <img className=" backIcon" src={BackIcon} alt="Go-back-icon" />
      </Link>
      {receiptItem.map((item, index) => (
        <article key={index}>
          <h3 className={styles.ticketsName}>{item.name}</h3>
          <p>WHERE</p>
          <h3>{item.where}</h3>
          <article className={styles.ticketsContainer}>
            <p className={styles.ticketsMainWhen}>WHEN</p>
            <h3 className={styles.ticketsWhen}>{item.when.date}</h3>
            <p>FROM</p>
            <h3 className={styles.ticketsFrom}>{item.when.from}</h3>
            <p>TO</p>
            <h3 className={styles.ticketsTo}>{item.when.to}</h3>
          </article>
          <p>INFO</p>
          <p>Section C - seat 233, bring umbrella. - seat {seatNr} </p>
        </article>
      ))}
    </section>
  );
}

export default Receipt;
