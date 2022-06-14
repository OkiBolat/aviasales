import React from 'react';
import logo from '../../assets/logo.png';
import './Ticket.scss';

function Ticket({ ticket }) {
  const there = ticket.segments[0];
  const back = ticket.segments[1];

  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">
          <p>
            {ticket.price}
            {' '}
            Р
          </p>
        </div>
        <img src={logo} alt="" className="ticket__company" />
      </div>
      <div className="ticket__main">
        <div className="ticket__destination">
          <div className="ticket__destination-there">
            <p className="ticket__info">
              {there.destination}
              {' '}
              -
              {' '}
              {there.origin}
            </p>
            <p>
              {there.departure_time}
              {' '}
              -
              {' '}
              {there.arrival_time}
            </p>
          </div>
          <div className="ticket__destination-back">
            <p className="ticket__info">
              {back.origin}
              {' '}
              -
              {' '}
              {back.destination}
            </p>
            <p>
              {back.departure_time}
              {' '}
              -
              {' '}
              {back.arrival_time}
            </p>
          </div>
        </div>
        <div className="tikcet__duration">
          <div className="ticket__destination-there">
            <p className="ticket__info">В пути</p>
            <p>
              {ticket.fullTimeThere.hours}
              {' '}
              ч
              {' '}
              {ticket.fullTimeThere.hours}
              {' '}
              м
            </p>
          </div>
          <div className="ticket__destination-back">
            <p className="ticket__info">В пути</p>
            <p>
              {ticket.fullTimeBack.hours}
              {' '}
              ч
              {' '}
              {ticket.fullTimeBack.hours}
              {' '}
              м
            </p>
          </div>
        </div>
        <div className="ticket__stops">
          <div className="ticket__destination-there">
            <p className="ticket__info">Пересадки</p>
            <p>{there.stops.join()}</p>
          </div>
          <div className="ticket__destination-back">
            <p className="ticket__info">Пересадки</p>
            <p>{back.stops.join()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
