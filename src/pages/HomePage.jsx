import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SORT_TYPE_OPTIONS } from '../constats';
import Tabs from '../components/Tabs';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import './HomePage.scss';
import { addOption } from '../redux/reducer';

function HomePage() {
  const dispatch = useDispatch();

  const sortType = useSelector((state) => state.tickets.sortType);
  const tickets = useSelector((state) => state.tickets.filteredTickets);
  const stops = useSelector((state) => state.tickets.filterParams.stops);
  const isLoading = useSelector((state) => state.tickets.requestInProgress);

  const ticketsWithMemo = useMemo(() => {
    if (!stops.length) {
      return tickets;
    }
    return tickets.filter((tick) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const val of stops) {
        if (val === tick.segments[0].stops.length) {
          return tick;
        }
      }
      return '';
    });
  }, [tickets, stops]);

  const setTab = ({ value }) => {
    dispatch(addOption(value));
  };

  return (
    <div className="wrapper">
      <Sidebar />
      <Tabs tabs={SORT_TYPE_OPTIONS} value={sortType} onChange={setTab} />
      <Main tickets={ticketsWithMemo} isLoading={isLoading} />

    </div>
  );
}

export default React.memo(HomePage);
