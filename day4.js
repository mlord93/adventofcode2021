/**
 * 
 * Advent of Code 2021
 * Day 4:
 * https://adventofcode.com/2021/day/4
 * 
 * Solution for input: 
 * Part 1: 89001
 * Part 2: 7296
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(4);
let nums, boards;

function resetInput() {
    [nums, ...boards ] = input;
    boards = boards.map((board) => board.split('\n').map((line) => line.trim().split(/ +/).map((x)=>Number(x))));
    nums = nums.split(',').map((x)=>Number(x));
}

function boardIsWinner(board) {
    for (let x = 0; x < board.length; x++) {
        if (board[x].reduce((a,c) => a+c,0) == -5) return true;
        if (board.reduce((a,c) => a+Number(c[x]), 0) == -5) return true;
    }
    return false;
}

function markNumber(board, num) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
            if (board[x][y] == num)board[x][y] = -1;
        }
    }
    return board;
}

function part1() {
    resetInput();
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < boards.length; y++) {
            boards[y] = markNumber(boards[y],nums[x]);
            if (boardIsWinner(boards[y])) return nums[x] * boards[y].flat().reduce((a,c) => c != -1 ? a + c : a, 0);
        }
    }
    return 'PANIC';
}

function part2() { 
    resetInput()
    let lastWinner;
    let winnerList = [];

    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < boards.length; y++) {
            boards[y] = markNumber(boards[y],nums[x]);
            if (boardIsWinner(boards[y]) && !winnerList.includes(y)) {
                winnerList.push(y);
                lastWinner = nums[x] * boards[y].flat().reduce((a,c) => c != -1 ? a + c : a, 0);
            }
        }
    }
    
    return lastWinner;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}