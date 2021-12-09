/**
 * 
 * Advent of Code 2021
 * Day :
 * https://adventofcode.com/2021/day/
 * 
 * Solution for input: 
 * Part 1: not 1703
 * Part 2: 
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(9).map((x) => x.split('').map((y) => Number(y)));

function findRiskLevels() {
    const rl = [];
    for (let x = 0; x<input.length; x++){
        for (let y = 0; y<input[x].length; y++){
            if ( x-1 >= 0 && input[x-1][y] <= input[x][y]) continue;
            if ( x+1 < input.length && input[x+1][y] <= input[x][y]) continue;
            if ( y-1 >= 0 && input[x][y-1] <= input[x][y]) continue;
            if ( y+1 < input[x].length && input[x][y+1] <= input[x][y]) continue;
            rl.push([x,y]);
        }
    }
    return rl;
}

function reach(c, visited=[], size=0) {
    if ( c[0] < 0 || c[0] >= input.length || c[1] < 0 || c[1] >= input[0].length || coordinateHasBeenVisited(c,visited) || input[c[0]][c[1]] == 9 ) return size;
    visited.push(c);
    return 1 + reach([c[0]-1, c[1]], visited, size) + reach([c[0]+1, c[1]], visited, size) + reach([c[0], c[1]-1], visited, size) + reach([c[0], c[1]+1], visited, size);
}

function coordinateHasBeenVisited(c,visited) {
    for (let v of visited) {
        if (c[0] == v[0] && c[1] == v[1]) return true;
    }
    return false;
}

function part1() {
    return findRiskLevels().reduce((a,c) => (1 + a + input[c[0]][c[1]]),0);
}

function part2() {
    const [a,b,c,...rest] =  findRiskLevels().map((x)=>reach(x)).sort((a,b) => b-a);
    return a*b*c;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}