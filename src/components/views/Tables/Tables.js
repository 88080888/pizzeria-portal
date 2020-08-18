import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'} activeClassName='active'>Booking</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/new'} activeClassName='active'>New booking</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/:id'} activeClassName='active'>Event</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'} activeClassName='active'>New event</Link>
  </div>
);


export default Tables;