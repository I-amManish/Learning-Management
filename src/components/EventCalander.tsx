"use client";

import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "This is my title - 1",
        time: "12:00 PM - 2:00 PM",
        description: "This is m description for title - 1"
    },
    {
        id: 1,
        title: "This is my title - 1",
        time: "12:00 PM - 2:00 PM",
        description: "This is m description for title - 1"
    },
    {
        id: 1,
        title: "This is my title - 1",
        time: "12:00 PM - 2:00 PM",
        description: "This is m description for title - 1"
    }
];

const EventCalander = () => {

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalander;
