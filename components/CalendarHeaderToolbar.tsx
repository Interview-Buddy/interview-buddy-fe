import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import ChevronLeft from '@utilities/ChevronLeft';
import ChevronRight from '@utilities/ChevronRight';

interface CalendarHeaderToolbarProps {
    calendarRef: any;
    isLoading: boolean;
}

const CalendarHeaderToolbar:FC<CalendarHeaderToolbarProps> = props => {
    const { calendarRef, isLoading } = props;
    const [title, setTitle] = useState(dayjs().format("MMMM YYYY"));

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
        <div className="flex items-center justify-between mb-4">
            <div className="flex">
                <button className="h-9 border-2 p-1 mr-2" data-cy="prev" onClick={handlePrev} disabled={isLoading}><ChevronLeft /></button>
                <button className="border-2 p-1 mr-2" data-cy="today" onClick={handleToday} disabled={isLoading}>Today</button>
                <button className="h-9 border-2 p-1" data-cy="next" onClick={handleNext} disabled={isLoading}><ChevronRight /></button>
            </div>
            <p className="text-center" data-cy="date-title">{title}</p>
            <div>
                <select id="view-type" data-cy="select-view-type" className="w-35 border-2"
                    onChange={e => handleViewChange(e)}
                    disabled={isLoading}
                >
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                    <option value="day">Day</option>
                </select>
            </div>
        </div>
    )
};

export default CalendarHeaderToolbar;