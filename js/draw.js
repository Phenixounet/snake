/*
** draw.js
** Draw game
*/

function clear_canvas(ctx, canvas, cell_size) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#222';
  let x = 0;
  while (x < canvas.width) {
    ctx.strokeRect(x, 0, cell_size, canvas.height);
    x = x + cell_size;
  }

  let y = 0;
  while (y < canvas.height) {
    ctx.strokeRect(0, y, canvas.width, cell_size);
    y = y + cell_size;
  }
}

function draw_snake(ctx, snake, cell_size) {
  ctx.fillStyle = 'lime';
  let i = 0;
  while (i < snake.length) {
    const s = snake[i];
    ctx.fillRect(s.x * cell_size, s.y * cell_size, cell_size, cell_size);
    i = i + 1;
  }
}

function draw_food(ctx, food, cell_size) {
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * cell_size, food.y * cell_size, cell_size, cell_size);
}

export { clear_canvas, draw_snake, draw_food };
