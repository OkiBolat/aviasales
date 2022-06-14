/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import styles from './Main.module.scss';
import { getTicketsThunk } from '../../redux/actions';
import MyLoader from '../../assets/preloader';

function Main({ tickets, isLoading }) {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const getNewTickets = () => {
    setPage(page + 1);
    dispatch(getTicketsThunk(page + 1));
  };

  const arr = [1, 2, 3, 4, 5];

  return (
    <div className={styles.main}>
      {isLoading ? arr.map((i) => <MyLoader key={i} />)
        : tickets.map((ticket) => (
          <Ticket isLoading={isLoading} key={ticket.id} ticket={ticket} />
        ))}
      <button
        onClick={getNewTickets}
        className={styles.main__button}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
      </button>
    </div>
  );
}

export default Main;
