"use client";
import React, { useState, useRef, useContext } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CalendarHeaderToolbar from "@components/CalendarHeaderToolbar";
import { AuthContext } from "../../auth-provider";
import dayjs from 'dayjs';

const AlumUser = () => {
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewType, setInterviewType] = useState('');
  const [interviewLength, setInterviewLength] = useState('');
  const [availabilityStart, setAvailabilityStart] = useState('');
  const [availabilityEnd, setAvailabilityEnd] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //Caused error when not set to any
  const calendarRef = useRef<any>();
  const user = useContext(AuthContext);

  const createMeetSlots = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <section className="flex flex-col p-4">
        <h2 className="text-2xl" data-cy="user-displayName">{`${user.firstName} ${user.lastName}`}</h2>
        <p data-cy="user-timezone">PST 00:00</p>
        <form onSubmit={createMeetSlots}>
          <div className="flex flex-row md:flex-col mt-2">
            <label 
              htmlFor="interview-date" 
              data-cy="interview-date-label" 
              className="text-lg"
            >
              Date:
            </label>
            <input 
              type="date"
              min={dayjs().format('YYYY-MM-DD')}
              data-cy="interview-date"
              className="ml-2 md:ml-0 w-35 border-2 h-8"
              onChange={e => setInterviewDate(dayjs(e.target.value).format('YYYY-MM-DDTHH:mm:ssZ[Z]'))}
            />
          </div>
          <div className="flex flex-row md:flex-col mt-2">
            <label 
              htmlFor="interview-type" 
              data-cy="interview-type-label" 
              className="text-lg"
            >
              Interview Type:
            </label>
            <select 
              id="interview-type" 
              data-cy="select-interview-type" 
              className="ml-2 md:ml-0 w-35 border-2 h-8"
              onChange={e => setInterviewType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="behavioral">Behavioral</option>
              <option value="technical">Technical</option>
            </select>
          </div>
          <div className="flex flex-row md:flex-col mt-2">
            <label 
              htmlFor="interview-length" 
              data-cy="interview-length-label" 
              className="text-lg"
            >
              Interview Length:
            </label>
            <select 
              id="interview-length" 
              data-cy="select-interview-length" 
              className="ml-2 md:ml-0 w-35 border-2 h-8"
              onChange={e => setInterviewLength(e.target.value)}
              required
            >
              <option value="">Select Length</option>
              <option value="30">30 minutes</option>
            </select>
          </div>
          <div className="flex flex-row md:flex-col mt-2">
            <label 
              htmlFor="availability-start" 
              data-cy="availability-start-label" 
              className="text-lg"
            >
              Availability Start:
            </label>
            <input 
              type="time"
              data-cy="availability-start"
              className="ml-2 md:ml-0 w-35 border-2 h-8"
              onChange={e => setAvailabilityStart(e.target.value)}
            />
          </div>
          <div className="flex flex-row md:flex-col mt-2">
            <label 
              htmlFor="availability-end" 
              data-cy="availability-end-label" 
              className="text-lg"
            >
              Availability End:
            </label>
            <input 
              type="time"
              data-cy="availability-end"
              className="ml-2 md:ml-0 w-35 border-2 h-8"
              onChange={e => setAvailabilityEnd(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input 
              type="submit" 
              value="Submit"
              data-cy="submit"
              className="border border-black-300 mt-3 bg-[#D0F4DE] md:w-full w-40"
            />
            <input 
              type="reset"
              value="Clear Parameters"
              data-cy="clear-parameters"
              className="border border-black-300 mt-3 bg-[#D0F4DE] md:w-full w-40"
            />
          </div>
        </form>
      </section>
      <section className="p-4 w-full h-full">
        <div className="p-4 bg-white">
          <CalendarHeaderToolbar calendarRef={calendarRef} isLoading={isLoading} />
          <FullCalendar
            //Used to reference the calendar and be able to access the Calendar API in the custom headerToolbar
            ref={calendarRef}
            //Used to set the height of the calendar content without scroll
            contentHeight={'auto'}
            //dayGridPlugin: Month and Day grid views, interactionPlugin: required to detect dateClick actions, selectable actions, and event drag-n-drop & resizing.
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin
            ]}
            //Set to false so we can create our own header toolbar with custom buttons/actions
            headerToolbar={false}
            viewDidMount={() => setIsLoading(false)}
          />
        </div>
      </section>
    </div>
  )
}

export default AlumUser