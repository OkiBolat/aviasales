import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import './HomePage.scss'

function HomePage () {
  const tickets = useSelector((state) => state.tickets.filteredTickets)
  console.log(tickets)
  return (
    <div className='wrapper'>
        <Sidebar />
        <Header />
        <Main tickets={tickets} />
      </div>
  )
}

export default HomePage;