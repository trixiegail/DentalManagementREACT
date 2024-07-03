import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Nav from '../components/Nav';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState(5);

  const handleDateChange = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
  };

  const handleGenerateSlot = async () => {
    try {
      const newSlot = {
        date: selectedDate,
        startTime: startTime,
        endTime: endTime,
        availableSlots: availableSlots,
      };
      await axios.post('http://localhost:8080/api/slots', newSlot);
      alert('Slot generated successfully!');
      setStartTime('');
      setEndTime('');
      setAvailableSlots(5);
    } catch (error) {
      console.error('Error generating slot:', error);
      alert('Failed to generate slot. Please try again.');
    }
  };

  return (
    <div className="ml-[265px] mt-[100px] min-h-screen flex flex-col items-center justify-center bg-gradient-to-b">
      <Nav />
      <img src="src/image/logo.png" alt="Logo" className="absolute top-0 left-5 ml-[265px] object-center"/>

      <div className="w-full max-w-4xl p-8 space-y-6 bg-[#88343B] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Generate Slots for a Date</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={dayjs(selectedDate)} onChange={handleDateChange} />
        </LocalizationProvider>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <input
            type="time"
            placeholder="Start Time"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            step="300"
          />
          <input
            type="time"
            placeholder="End Time"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            step="300"
          />
          <input
            type="number"
            placeholder="Number of Available Slots"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={availableSlots}
            onChange={(e) => setAvailableSlots(e.target.value)}
            min="1"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-[#F7C301] text-black font-bold rounded-lg hover:bg-[#F7C301]"
            onClick={handleGenerateSlot}
          >
            Generate Slot
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
