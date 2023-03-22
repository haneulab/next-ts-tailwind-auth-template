type DateObject = {
    year?: number
    month?: [number, string]
    day?: [number, string]
    time?: {
        hour: number
        minute: number
        char: string
    }
}

function dates(_date: string, _option: 'string'): string
function dates(_date: string, _option: 'object'): DateObject

function dates(date: string, option: 'string' | 'object'): string | DateObject {
    const shortDateCtx = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(new Date(date))
    const longDateCtx = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'full',
    }).format(new Date(date))

    if (option === 'string') return shortDateCtx

    if (option === 'object') {
        const [leftDate, rightTime] = shortDateCtx
            .split(',')
            .map((char) => char.trim())
        const [month, day, year] = leftDate.split('/')
        const [timeValue, time] = rightTime.split(' ')
        const [hour, minute] = timeValue.split(':')

        const [dayString, monthStringRaw] = longDateCtx
            .split(',')
            .map((str) => str.trim())

        const monthString = monthStringRaw.split(' ')[0]

        return {
            year: Number(year),
            month: [Number(month), monthString],
            day: [Number(day), dayString],
            time: {
                hour: Number(hour),
                minute: Number(minute),
                char: time,
            },
        }
    }
}

export default dates
