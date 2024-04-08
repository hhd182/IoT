export const convertDateFormat = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const sortDataAscending = (data, columnsort) => {
    return data.sort((a, b) => (a[columnsort] < b[columnsort]) ? -1 : (a[columnsort] > b[columnsort]) ? 1 : 0);
};

export const sortDataDescending = (data, columnsort) => {
    return data.sort((a, b) => (a[columnsort] > b[columnsort]) ? -1 : (a[columnsort] < b[columnsort]) ? 1 : 0);
};

