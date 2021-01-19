export const fixdate = (date) => {
    // 2020-12-24T00:00:00.000Z

    date = date.split('T')
    date = date[0]

    return date
}