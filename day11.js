/**
 * 
 * Advent of Code 2021
 * Day 11:
 * https://adventofcode.com/2021/day/11
 * 
 * Solution for input: 
 * Part 1: 1594
 * Part 2: 437
 * 
 */

import { getInput, formatAnswer } from './utils.js';
let map;
let count;
let flashedInStep;

function resetVals(){
    map = getInput(11).map((x) => x.split('').map((y) => Number(y)));
    count = 0;
    flashedInStep = [];
}

function increment(minx=0, maxx=map.length, miny=0, maxy=map[0].length) {
    for (let x = minx; x < maxx; x++) {
        for (let y = miny; y < maxy; y++) {
            if (coordinateHasFlashed([x,y])) continue;
            if (map[x][y] !== 9 ) {
                map[x][y]++;
            } else {
                count++;
                map[x][y] = 0;
                flashedInStep.push([x,y]);
                increment(Math.max(0, x - 1), Math.min(map.length, x + 2), Math.max(0, y - 1), Math.min(map[x].length, y + 2));
            }
        }
    }
}

function coordinateHasFlashed(c) {
    for (let f of flashedInStep) {
        if (c[0] == f[0] && c[1] == f[1]) return true;
    }
    return false;
}

function part1() {
    resetVals();
    for (let i = 0; i < 100; i++) {
        flashedInStep = [];
        increment();
    }
    return count;
}

function part2() {
    resetVals();
    let step = 0;
    while (flashedInStep.length !== (map.length * map[0].length)){
        flashedInStep = [];
        increment();
        step++;
    }
    return step;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}