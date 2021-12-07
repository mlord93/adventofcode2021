/**
 * 
 * Advent of Code 2021
 * Day 7:
 * https://adventofcode.com/2021/day/
 * 
 * Solution for input: 
 * Part 1: 351901
 * Part 2: 101079875
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(7)[0].split(',').map((x) => Number(x));


function part1() {
    let leastFuel;
    for(let x = Math.min(...input); x<Math.max(...input); x++){
        let fuelToX = input.reduce((a,c) => Math.abs(x-c) + a,0);
        leastFuel = !leastFuel || (leastFuel > fuelToX ) ? fuelToX : leastFuel;
    }
    return leastFuel;
}

function calcFuelDistence(d) {
    let r = 0;
    for(let x = 1; x<=d; x++){
        r+=x;
    }
    return r
}

function part2() {
    let leastFuel;
    for(let x = Math.min(...input); x<Math.max(...input); x++){
        let fuelToX = input.reduce((a,c) => calcFuelDistence(Math.abs(x-c)) + a,0);
        leastFuel = !leastFuel || (leastFuel > fuelToX ) ? fuelToX : leastFuel;
    }
    return leastFuel;
}


formatAnswer(part1(), part2());

export {
    part1,
    part2
}