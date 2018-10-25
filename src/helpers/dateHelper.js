import moment from 'moment'
export const FORMAT_DATE = 'YYYY-MM-DD'
export const FORMAT_TIME = 'hh:mm A'

export const getFormattedTime = (value) => {
    return moment(value, FORMAT_TIME).format(FORMAT_TIME).replace(/^0(?:0:0?)?/, '')
}