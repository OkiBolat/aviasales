import React from "react";
import Ticket from "../Ticket/Ticket";
import './Main.scss';

function Main({ tickets }) {
  return (
    <div className="main">
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ ticket }/>
      ))}
      <button className="main__button">ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
    </div>
  )
}

export default Main;