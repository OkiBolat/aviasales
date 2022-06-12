import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTicketsByStops } from "../../redux/reducer";
import Checkbox from "../Checkbox/Checkbox";
import { filterConstant } from '../../constats/filter';
import styles from './Sidebar.module.scss';

function Sidebar() {
const [filter, setFilter] = useState(filterConstant);
  const dispatch = useDispatch();

  const getChecboxValue = (e) => {
    const { value, name } = e.target;
    setFilter({...filter, [name]: {...filter[name], isActive: !filter[name].isActive} });
    dispatch(setTicketsByStops(value));
  };

  return (
    <div className={styles.sidebar}>
      <p className={styles.sidebar__name}>количество пересадок</p>
      <div className={styles.sidebar__filter}>
        {Object.values(filter).map((item, index) => (
          <Checkbox item={item} key={index} getChecboxValue={getChecboxValue} />
        ))}
      </div>
    </div>
  )
};

export default Sidebar;