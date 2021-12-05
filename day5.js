/**
 * 
 * Advent of Code 2021
 * Day :
 * https://adventofcode.com/2021/day/
 * 
 * Solution for input: 
 * Part 1: 5197
 * Part 2: 18605
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(5);

let map = [];

function part1(part2=false) {
    map = [];
    for (let line of input) {
        let [a,b] = line.split(' -> ');
        a = a.split(',').map((x) => Number(x));
        b = b.split(',').map((x) => Number(x));;
        if (a[0] == b[0]) {
            for (let x = Math.min(a[1], b[1]); x <= Math.max(a[1], b[1]); x++){
                map[x] = map[x] == undefined ? [] : map[x];
                map[x][a[0]] = Number(map[x][a[0]] ) ? map[x][a[0]] + 1 : 1;
            }
        } else if (a[1] == b[1]) {
            for (let x = Math.min(a[0], b[0]); x <= Math.max(a[0], b[0]); x++){
                map[a[1]] = map[a[1]] == undefined ? [] : map[a[1]];
                map[a[1]][x] = Number(map[a[1]][x]) ? map[a[1]][x] + 1: 1;
            }
        } else {
            if (part2){
                for (let x = 0; x <= Math.abs(a[0]-b[0]); x++){
                    let dx = a[0] < b[0] ? a[0] + x : a[0] - x;
                    let dy = a[1] < b[1] ? a[1] + x : a[1] - x;
                    map[dy] = map[dy] == undefined ? [] : map[dy];
                    map[dy][dx] = Number(map[dy][dx]) ? map[dy][dx] + 1: 1;
                }
            }
        }
    }

    return(map.flat().filter((x) => x > 1).length);
}

function part2() {
    return part1(true)
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}