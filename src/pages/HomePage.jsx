import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import './HomePage.scss'

function HomePage() {
  console.log('render');
  const tickets = useSelector((state) => state.tickets.filteredTickets);
  const stops = useSelector((state) => state.tickets.filterParams.stops);

  const ticketsWithMemo = useMemo(() => {
    if (!stops.length) {
      return tickets
    }
    return tickets.filter((tick) => {
      for (let val of stops) {
        if (val === tick.stops) {
          return tick;
        }
      }
      return ''
    });
  }, [tickets, stops]);


  return (
    <div className='wrapper'>
      <Sidebar />
      <Header />
      <Main tickets={ticketsWithMemo} />
    </div>
  )
};

export default React.memo(HomePage);