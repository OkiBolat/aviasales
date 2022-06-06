import React from "react";
import logo from "../../assets/logo.png"
import './Ticket.scss'

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">
          <p>{ticket.price} Р</p>
        </div>
        <img src={logo} alt="" className="ticket__company" />
      </div>
      <div className="ticket__main">
        <div className="ticket__destination">
          <div className="ticket__destination-there">
          <p className="ticket__info">{ticket.destination} - {ticket.origin}</p>
            <p>{ticket.departure_time} - {ticket.arrival_time}</p>
          </div>
          <div className="ticket__destination-back">
          <p className="ticket__info">{ticket.origin} - {ticket.destination}</p>
            <p>10:45 - 08:00</p>
          </div>
        </div>
        <div className="tikcet__duration">
          <div className="ticket__destination-there">
            <p className="ticket__info">MOW - HKT</p>
            <p>10:45 - 08:00</p>
          </div>
          <div className="ticket__destination-back">
          <p className="ticket__info">MOW - HKT</p>
            <p>10:45 - 08:00</p>
          </div>
        </div>
        <div className="ticket__stops">
          <div className="ticket__destination-there">
          <p className="ticket__info">MOW - HKT</p>
            <p>10:45 - 08:00</p>
          </div>
          <div className="ticket__destination-back">
          <p className="ticket__info">MOW - HKT</p>
            <p>10:45 - 08:00</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Ticket;