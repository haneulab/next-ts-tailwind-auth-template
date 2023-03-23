import type { ICalendarMonthYearUI } from './CalendarMonthYearUI.types'

const CalendarMonthYearUI = (props: ICalendarMonthYearUI) => {
    return (
        <p>
            {props.month} {props.year}
        </p>
    )
}

export default CalendarMonthYearUI
