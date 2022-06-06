import React from "react";
import './Checkbox.scss'

const Checkbox = ({ item, getChecboxValue }) => {
  return (
    <label for={item.name} className='checkbox'>
      <input checked={item.isActive} onChange={getChecboxValue} value={item.val} className='checkbox__input' id={item.name} name={item.name} type='checkbox' />
      <div className='checkbox__label'>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.96934 9.30953L0.428528 5.24226L1.70904 4.09529L4.96934 7.00746L11.8623 0.833344L13.1428 1.98845L4.96934 9.30953Z" fill="#fffff" />
        </svg>
      </div>
      <label className='checkbox__name' for={item.name}>{item.name}</label>
    </label>
  )
};

export default Checkbox;