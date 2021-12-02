/**
 * 
 * Advent of Code 2021
 * Day 2
 * https://adventofcode.com/2021/day/2
 * 
 * Solution for input: 
 * Part 1: 1727835
 * Part 2: 1544000595
 * 
 */

import { getInput, formatAnswer } from './utils.js';
//const input = getInput(2);
const input = getInput(2).map((x) => [x.split(' ')[0], Number(x.split(' ')[1])]);

function part1() {
    let [ hor, depth ]  = [ 0, 0 ];
    for (let [direction, i] of input) {
        switch (direction) {
            case 'forward':
                hor += i;
                break;
            case 'up':
                depth -= i;
                break;
            case 'down':
                depth += i;
                break;
        }
    }
    return hor * depth;
}

function part2() {
    let [ hor, depth, aim ]  = [ 0, 0, 0 ];
    for (let [direction, i] of input) {
        switch (direction) {
            case 'forward':
                hor += i;
                depth += (i * aim);
                break;
            case 'up':
                aim -= i;
                break;
            case 'down':
                aim += i;
                break;
        }
    }
    return hor * depth;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}