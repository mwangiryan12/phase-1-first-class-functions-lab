// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  
  // Test the functions
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(drivers)); // ['Amari', 'Mo']
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Amari', 'Mo']
  console.log(fareDoubler(10)); // 20
  console.log(fareTripler(10)); // 30