/**
 * 
 * Advent of Code 2021
 * Day :
 * https://adventofcode.com/2021/day/
 * 
 * Solution for input: 
 * Part 1: 1624
 * Part 2: 1653
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(1).map((x) => Number(x));

function part1() {
    let count = 0;
    let cur = input[0];
    for (let x = 1; x < input.length; x++) {
        if (input[x] > cur) count++;
        cur = input[x];
    }
    return count;
}

function part2() {
    const threeSum = (arr, i) => arr[i] + arr[i + 1] + arr[i + 2];
    let count = 0;
    let cur = threeSum(input, 0)
    for (let x = 1; x < input.length-2; x++) {
        if (threeSum(input, x) > cur) count++;
        cur = threeSum(input, x);
    }
    return count;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}