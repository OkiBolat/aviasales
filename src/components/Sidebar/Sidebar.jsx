import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTicketsByStops } from "../../redux/reducer";
import './Sidebar.scss'
const checkboxArr = [
  {
    val: null,
    name: 'Все'
  },
  {
    val: 0,
    name: 'Без пересадок'
  },
  {
    val: 1,
    name: '1 пересадка'
  },
  {
    val: 2,
    name: '2 пересадки'
  },
  {
    val: 3,
    name: '3 пересадки'
  },
]
function Sidebar() {

  const dispatch = useDispatch()
  const getChecboxValue = (e) => {
    dispatch(setTicketsByStops(e.target.value))
  }
  return (
    <div className='sidebar'>
      <p className='sidebar__name'>количество пересадок</p>
      <div className="sidebar__filter">
        {checkboxArr.map((item, index) => (
          <label key={index} htmlFor={item} className='sidebar__item'>
            <input onChange={getChecboxValue} value={item.val} className='sidebar__input' id={item.name} name={item.name} type='checkbox' />
            <div className='sidebar__checkbox'>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.96934 9.30953L0.428528 5.24226L1.70904 4.09529L4.96934 7.00746L11.8623 0.833344L13.1428 1.98845L4.96934 9.30953Z" fill="#fffff" />
              </svg>
            </div>
            <label className='sidebar__checkboxName' for={item.name}>{item.name}</label>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;