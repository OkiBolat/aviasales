import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTicketsByStops } from '../../redux/reducer';
import Checkbox from '../Checkbox/Checkbox';
import { filterConstant } from '../../constats/filter';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const [filter, setFilter] = useState({ ...filterConstant });
  const dispatch = useDispatch();

  const getChecboxValue = (e) => {
    const { name, value } = e.target;
    if (name === 'Все') {
      setFilter((prev) => {
        const newFilters = { ...prev };
        Object.keys(newFilters).forEach((key) => {
          newFilters[key].isActive = false;
        });
        newFilters['Все'].isActive = true;
        return newFilters;
      });
    } else {
      setFilter((prev) => {
        const newFilters = { ...prev, [name]: { ...prev[name], isActive: !prev[name].isActive } };
        if (Object.values(newFilters).every((filt) => !filt.isActive)) newFilters['Все'].isActive = true;
        else newFilters['Все'].isActive = false;
        return newFilters;
      });
      dispatch(setTicketsByStops(value));
    }
  };

  return (
    <div className={styles.sidebar}>
      <p className={styles.sidebar__name}>количество пересадок</p>
      <div className={styles.sidebar__filter}>
        {Object.values(filter).map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Checkbox item={item} key={index} getChecboxValue={getChecboxValue} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
