import type { ICalendarDateUI } from './CalendarDateUI.types'

const CalendarDateUI = (props: ICalendarDateUI) => {
    return <p>{props.selectedDate}</p>
}

export default CalendarDateUI
