/**
 * 
 * Advent of Code 2021
 * Day 6:
 * https://adventofcode.com/2021/day/6
 * 
 * Solution for input: 
 * Part 1: 380243
 * Part 2: 1708791884591
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(6)[0];

function part1() {
    let fish = input.split(',').map((x) => Number(x));
    for (let x=0;x<80;x++){
        let newFish = Array(fish.reduce((a,c) => c == 0 ? a + 1 : a, 0)).fill(8);
        fish = [...fish.map((x) => x == 0 ? 6 : x - 1), ...newFish];
    }
    return fish.length;
}

function part2() {
    let fish = input.split(',').map((x) => Number(x));
    let numReproducingOnDay = [];
    for (let x=0;x<256;x++){
        numReproducingOnDay[x] = fish.reduce((a,c) => c == 0 ? a + 1 : a, 0);
        let y = x - 9;
        while (y >= 0) {
            numReproducingOnDay[x] += numReproducingOnDay[y];
            y = y-7;
        }
        fish = fish.map((x) => x == 0 ? 6 : x - 1);
    }
    return fish.length + numReproducingOnDay.reduce((a,c) => a + c, 0);
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}