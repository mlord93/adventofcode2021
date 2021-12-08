/**
 * 
 * Advent of Code 2021
 * Day 8:
 * https://adventofcode.com/2021/day/8
 * 
 * Solution for input: 
 * Part 1: 310
 * Part 2: 915941
 * 
 */

import { getInput, formatAnswer } from './utils.js';
import _ from 'lodash';
const input = getInput(8);

function part1() {
    let count = 0
    for (let i of input) {
        count += i.split('|')[1].trim().split(' ').filter((x) => [2,4,3,7].includes(x.length)).length;
    }
    return count;
}

function part2() {
    let count = 0; 
    for (let i of input) {
        let map = [];
        const [unknowns, nums] = i.split('|').map((x) => x.trim().split(' '));
        for (let x of unknowns) {
            switch(x.length) {
                case 2:
                    map[1] = x;
                    break;
                case 4:
                    map[4] = x;
                    break;
                case 3:
                    map[7] = x;
                    break;
                case 7: 
                    map[8] = x;
                    break;
                case 5:
                    if (map[1] && _.intersection(map[1].split(''), x.split('')).length == 2) {
                        map[3] = x;
                    } else if (map[8] && map[9] && x.includes(_.xor(map[8].split(''), map[9].split(''))[0])) {
                        map[2] = x;
                    } else if (map[8] && map[9]) {
                        map[5] = x;
                    } else {
                        unknowns.push(x);
                    }
                    break;
                case 6:
                    if (map[3] && _.intersection(x.split(''),map[3].split('')).length == 5) {
                        map[9] = x;
                    } else if (map[1] && _.intersection(x.split(''),map[1].split('')).length == 1) {
                        map[6] = x;
                    } else if (map[1] && map[3]){
                        map[0] = x;
                    } else {
                        unknowns.push(x);
                    }
                    break;
            }
        }
        map = map.reduce((a,c,i) => (a[c.split('').sort().join('')] = i, a), {});
        count += Number(nums.map((n) => map[n.split('').sort().join('')]).join(''));
    }
    return count;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}