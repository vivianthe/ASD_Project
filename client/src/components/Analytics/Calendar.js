// import Clock from 'react-clock';
import { V-Calendar } from 'v-calendar'; // this is a Vue package

// Use `onChange` prop for getting new values.
// reference on states: https://reactpatterns.com/#state-hoisting

import React from 'react';

const Calendar = () => {
  return (
    <div>
      {/* <Clock /> */}
      <V-Calendar />
      {/* lmao */}
    </div>
  );
};

export default Calendar;