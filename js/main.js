/*
** main.js
** main
*/

import { clear_canvas, draw_snake, draw_food } from './draw.js';
import { create_food, snake_move, collision_handler } from './game.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cell_size = 20;
const cell_count = canvas.width / cell_size;

let snake = [ { x: 10, y: 10 } ];
let direction = 'droite';
let food = create_food(cell_count, snake);
let alive = true;
let score = 0;
let pending_dir = "droite";

// test

function direction_handler(event) {
  const key = event.key;

  if (key === 'ArrowUp' && direction !== 'down')
    direction = 'up';
  else if (key === 'ArrowDown' && direction !== 'up')
    direction = 'down';
  else if (key === 'ArrowLeft' && direction !== 'right')
    direction = 'left';
  else if (key === 'ArrowRight' && direction !== 'left')
    direction = 'right';
}

function game_loop() {
  if (!alive)
    return;

  const tete = snake_move(snake, direction);

  if (tete.x === food.x && tete.y === food.y) {
    score = score + 1;
    food = create_food(cell_count, snake);
  }
  else
    snake.pop();

  if (collision_handler(tete, snake, cell_count)) {
    alive = false;
    alert('Game Over');
    document.getElementById('restart').style.display = 'inline-block';
    return;
  }

  document.getElementById('score').textContent = "Score : " + score;

  clear_canvas(ctx, canvas, cell_size);
  draw_snake(ctx, snake, cell_size);
  draw_food(ctx, food, cell_size);
}

function reset_game() {
  snake = [ { x: 10, y: 10 } ];
  direction = pending_dir;
  food = create_food(cell_count, snake);
  alive = true;
  score = 0;
  document.getElementById('score').textContent = "Score : 0";
  document.getElementById('restart').style.display = 'none';
}

function main() {
  document.addEventListener('keydown', direction_handler);
  document.getElementById('restart').addEventListener('click', reset_game);
  setInterval(game_loop, 150);
}

main();
