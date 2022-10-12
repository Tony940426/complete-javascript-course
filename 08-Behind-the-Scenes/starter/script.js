'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge(){
    const outPut = `You are ${firstName} and you are ${age}.`;
    return outPut
  }
}
const firstName = "Tony";
const hello = calcAge(1989)
