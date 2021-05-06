const createEmployeeRecord = (array) =>{
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (array) => {
    let new_arr = [];
    array.forEach((record) => {
        new_arr.push(createEmployeeRecord(record));
    })
    return new_arr;
}