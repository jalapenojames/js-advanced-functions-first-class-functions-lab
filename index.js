// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(myArr) {
    let newArray = myArr.slice(0,2)
    return newArray
}

function returnLastTwoDrivers(myArr) {
    let newArray = myArr.slice(myArr.length-2,myArr.length)
    return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]   

function createFareMultiplier(n) {
    return function(fare) {
        return fare*n
    }
}

function fareDoubler(myFare) {
    const double = createFareMultiplier(2)
    return double(myFare)
}

function fareTripler(myFare) {
    const triple = createFareMultiplier(3)
    return triple(myFare)
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers)
}
