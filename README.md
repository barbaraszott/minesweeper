# Minesweeper

Popular single-player puzzle computer game.

Live version: https://barbaraszott.github.io/minesweeper/

## Table of contents

- [Introduction](#introduction)
- [Minesweeper](#minesweeper)
- [Technologies](#technologies)
- [Project status](#project-status)

## Introduction

Game made for fun and for React practice.
Inspiration for design: [Sweet Minesweeper](https://dribbble.com/shots/6343456-Sweet-Minesweeper) by [Inkbyte Studios](https://dribbble.com/InkbyteStudios)

## Minesweeper

I'm sure You know what this game is about! Goal is to clear board containing hidden bombs (mines) without detonating any of them, with help from clues about the number of neighbouring bombs in each field.

# How to play

If a square containing a mine is revealed, the player loses the game.
If no mine is revealed, a digit is instead displayed in the square, indicating how many adjacent squares contain mines.
If no mines are adjacent, the square becomes blank, and all adjacent squares will be recursively revealed.
With those informations user have to deduce where the mines are and clear every other field - player can flag those cells (change click action with toggle - left corner above the board).

## Technologies

- JavaScript (ES6)
- React.js
- SCSS as a CSS preprocessor
- BEM methodology

## Project status

In progress:
- Better UX for mobile phones
- When there are no more flags left and user wants to use it - shake animation on FlagCounter (instead of showing alert)
- [ReactTour](https://reactour.js.org) - when player plays for the very first time
- Choosing level (easy, medium, hard) before start

