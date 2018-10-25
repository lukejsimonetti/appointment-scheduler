import moment from 'moment'

export const getFormattedTime = (value) => {
    return moment(value, "hh:mm").format("hh:mm A").replace(/^0(?:0:0?)?/, '')
}