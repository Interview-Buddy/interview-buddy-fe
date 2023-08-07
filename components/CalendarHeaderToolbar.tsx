import React, { FC, useState } from 'react';
import moment from 'moment';

interface CalendarHeaderToolbarProps {
    calendarRef: any;
}
//Working here creating custom headerToolbar. Disable buttons until calendar rendered? Prev/Next icons instead of words.
const CalendarHeaderToolbar:FC<CalendarHeaderToolbarProps> = props => {
    const { calendarRef } = props;
    const [title, setTitle] = useState(moment().format("MMMM YYYY"));

    const handlePrev = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.prev();
        setTitle(calendarApi.currentDataManager.data.viewTitle)
    };

    const handleToday = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.today();
        setTitle(calendarApi.currentDataManager.data.viewTitle)
    };

    const handleNext = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.next();
        setTitle(calendarApi.currentDataManager.data.viewTitle)
    };

    const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const calendarApi = calendarRef.current.getApi();
        switch(e.target.value) {
            case 'month':
                calendarApi.changeView("dayGridMonth");
                setTitle(calendarApi.currentDataManager.data.viewTitle)
                break;
            case 'week':
                calendarApi.changeView("timeGridWeek");
                setTitle(calendarApi.currentDataManager.data.viewTitle)
                break;
            case 'day':
                calendarApi.changeView("timeGridDay");
                setTitle(calendarApi.currentDataManager.data.viewTitle)
                break;
        };
    };

    return (
        <div className="mb-4">
            <button className="border-2 p-1 mr-2" onClick={handlePrev}>Prev</button>
            <button className="border-2 p-1 mr-2" onClick={handleToday}>Today</button>
            <button className="border-2 p-1" onClick={handleNext}>Next</button>
            <p>{title}</p>
            <div className="flex flex-row">
                <label htmlFor="view-type" data-cy="interview-type-label">View:</label>
                <select id="view-type" data-cy="select" className="ml-2 w-35 border-2"
                    onChange={e => handleViewChange(e)}
                >
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                    <option value="day">Day</option>
                </select>
            </div>
        </div>
    )
}

export default CalendarHeaderToolbar;