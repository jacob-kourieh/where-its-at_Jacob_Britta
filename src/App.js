import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./Pages/Event";
import EventTicket from "./Components/EventTicket";
import Order from "./Pages/Order";
import { createContext, useState } from "react";
import { Fetch } from "./Components/Fetch";
import Receipt from "./Pages/Receipt";
import Start from "./Components/Start";

export const AddPriceContext = createContext();

//Funktion som retunerar routs med vägar till sidan delar
function App() {
  return (
    <main>
      <BrowserRouter>
        <Fetch>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/ticket" element={<EventTicket />}></Route>
            <Route path="/receipt" element={<Receipt />}></Route>
          </Routes>
        </Fetch>
      </BrowserRouter>
    </main>
  );
}

export default App;
