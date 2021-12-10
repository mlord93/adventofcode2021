/**
 * 
 * Advent of Code 2021
 * Day :
 * https://adventofcode.com/2021/day/
 * 
 * Solution for input: 
 * Part 1: 243939
 * Part 2: 2421222841
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(10);

const map = {
    '{':'}',
    '[':']',
    '(':')',
    '<':'>'
}

const open = ['[','{', '<', '('];
const close = [']','}', '>', ')'];
const score1 = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
}

const score2 = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
}

function part1() {
    let points = 0;
    for (let i of input) {
        let stack = [];
        for (let x=0;x<i.length;x++) {
            if (open.includes(i[x])) {
                stack.push(map[i[x]]);
            } else {
                let pop = stack.pop();
                if (pop !== i[x]) {
                    points += score1[i[x]];
                    x = i.length;
                }
            }
        }
    }
    return points;
}

function part2() {
    let points = [];
    for (let i of input) {
        let stack = [];
        for (let x=0;x<i.length;x++) {
            if (open.includes(i[x])) {
                stack.push(map[i[x]]);
            } else {
                let pop = stack.pop();
                if (pop !== i[x]) {
                    x = i.length;
                    stack =[];
                }
            }
        }
        if (stack.length > 0) {
            let p = 0;
            for (let x = stack.length - 1 ; x>=0;x--) {
                p = p * 5;
                p += score2[stack[x]];
            }
            points.push(p);
        }
    }
    return points.sort((a,b) => b-a)[(points.length-1)/2];
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}