import type { ICalendar } from './Calendar.types'
import { Calendar as CalendarUI } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useEffect, useState } from 'react'
import {
    type DateMonthYear,
    type DateObject,
    dates,
    formatDateDisplayer,
    formatDateMonthYearDispalyer,
} from '@nextapp/utils'
import dynamic from 'next/dynamic'

const CalendarMonthYearUI = dynamic(
    () => import('@nextapp/CalendarMonthYearUI')
)
const CalendarDateUI = dynamic(() => import('@nextapp/CalendarDateUI'))

const Calendar = ({
    calendarView = true,
    monthYearView = true,
    selectedDateView = true,
}: ICalendar) => {
    const [date, setDate] = useState<Date>(new Date(new Date().toISOString()))
    const [monthYearDisplayer, setMonthYearDisplayer] = useState<DateMonthYear>(
        formatDateMonthYearDispalyer(dates(new Date().toISOString(), 'object'))
    )
    const [dateDisplayer, setDateDisplayer] = useState<string>(
        formatDateDisplayer(dates(new Date().toISOString(), 'object'))
    )

    function onChangeMonthYearDisplayer(_e) {
        setMonthYearDisplayer(
            formatDateMonthYearDispalyer(
                dates(_e.activeStartDate.toISOString(), 'object')
            )
        )
    }

    useEffect(() => {
        setDateDisplayer(
            formatDateDisplayer(dates(date.toISOString(), 'object'))
        )
    }, [date])

    return (
        <>
            <div className="flex flex-col items-start w-full gap-y-4 lg:gap-y-6">
                {monthYearView && (
                    <CalendarMonthYearUI
                        month={monthYearDisplayer.month}
                        year={monthYearDisplayer.year}
                    />
                )}
                {calendarView && (
                    <CalendarUI
                        className="w-full mx-0"
                        calendarType="US"
                        value={date}
                        onChange={setDate}
                        onActiveStartDateChange={onChangeMonthYearDisplayer}
                    />
                )}
                {selectedDateView && (
                    <CalendarDateUI selectedDate={dateDisplayer} />
                )}
            </div>
        </>
    )
}

export default Calendar
