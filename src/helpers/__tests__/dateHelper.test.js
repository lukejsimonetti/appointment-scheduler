import { getFormattedTime } from '../dateHelper'

describe('getFormattedTime function', () => {
    test('getFormattedTime fails properly with invalid date', () => {
        const expectedResult = 'Invalid date'
        expect(getFormattedTime("xyz")).toEqual(expectedResult)
        expect(getFormattedTime(null)).toEqual(expectedResult)
        expect(getFormattedTime(undefined)).toEqual(expectedResult)
        expect(getFormattedTime({})).toEqual(expectedResult)
        expect(getFormattedTime([])).toEqual(expectedResult)
    })
    test('getFormattedTime formats time properly', () => {
        expect(getFormattedTime("09:00")).toEqual("9:00 AM")
        expect(getFormattedTime("11:00")).toContain("AM")
        expect(getFormattedTime("13:00")).toContain("PM")
        expect(getFormattedTime("13:00")).toEqual("1:00 PM")
        expect(getFormattedTime(9)).toEqual("9:00 AM")
        expect(getFormattedTime(13)).toEqual("1:00 PM")
    })

})