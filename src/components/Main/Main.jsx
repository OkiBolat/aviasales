import React, { useState } from "react";
import Ticket from "../Ticket/Ticket";
import styles from './Main.module.scss';
import preloader from '../../assets/238.gif'
import { useDispatch } from "react-redux";
import { getTicketsThunk } from "../../redux/actions";

function Main({ tickets, isLoading }) {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const getNewTickets = () => {
    setPage(page + 1)
    dispatch(getTicketsThunk(page + 1))
  }
  return (
    <div className={styles.main}>
      {isLoading ? <img style={{width: '100%', marginBottom: '20px'}} src={preloader} alt="" />: 
      tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ ticket }/>
      ))}
      <button onClick={getNewTickets} className={styles.main__button}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
    </div>
  )
}

export default Main;