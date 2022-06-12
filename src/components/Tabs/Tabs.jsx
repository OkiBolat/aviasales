import React from "react";
import cn from 'classnames';
import styles from './Tabs.module.scss';

const Tabs = ({ value, onChange, tabs }) => (
  <div className={styles.header}>
    {tabs.map((tab, index) => (
      <button 
        key={index}
        onClick={() => onChange(tab)}
        className={cn(styles.button, tab.value === value && styles.active)}
      >
        {tab.label}
    </button>
    ))}
  </div>
);

export default Tabs;