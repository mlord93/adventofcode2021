/**
 * 
 * Advent of Code 2021
 * Day 3:
 * https://adventofcode.com/2021/day/3
 * 
 * Solution for input: 
 * Part 1: 
 * Part 2: 
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(3);

function part1() {
    let [gamma, epsilon]  = ['', ''];
    for (let x = 0; x < input[0].length; x++) {
        let count = 0;
        for (let line of input) {
            if (line[x] == '1' ) count++;
        }
        gamma += count > (input.length - count) ? '1' : '0';
        epsilon += count < (input.length - count) ? '1' : '0';
    }
    return parseInt(gamma, 2) * parseInt(epsilon, 2); 
}

function part2() {
    const frontSum = (arr) => arr.reduce((a,c) => a+Number(c[0]), 0);

    const oxy = function(arr=input, str='') {
        if (arr.length == 1) return str+arr[0];
        let val = frontSum(arr) >= (arr.length - frontSum(arr)) ? '1' : '0'
        return oxy(arr.reduce((a,c)=>c[0] == val ? [...a, (c.slice(1))] : a,[]),str+val);
    }

    const co2 = function(arr=input, str='') {
        if (arr.length == 1) return str+arr[0];
        let val = frontSum(arr) < (arr.length - frontSum(arr)) ? '1' : '0'
        return co2(arr.reduce((a,c)=>c[0] == val ? [...a, (c.slice(1))] : a,[]),str+val);
    }

    return parseInt(oxy(), 2) * parseInt(co2(), 2); 
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}