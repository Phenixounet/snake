/*
** game.js
** game logic
*/

function create_food(cell_count, snake) {
  let nouvelle;
  let valide = false;

  while (!valide) {
    nouvelle = {
      x: Math.floor(Math.random() * cell_count),
      y: Math.floor(Math.random() * cell_count)
    };

    let i = 0;
    valide = true;
    while (i < snake.length) {
      if (snake[i].x === nouvelle.x && snake[i].y === nouvelle.y)
        valide = false;
      i = i + 1;
    }
  }
  return nouvelle;
}

function snake_move(snake, direction) {
  const tete = { x: snake[0].x, y: snake[0].y };

  if (direction === 'up')
    tete.y = tete.y - 1;
  else if (direction === 'down')
    tete.y = tete.y + 1;
  else if (direction === 'left')
    tete.x = tete.x - 1;
  else if (direction === 'right')
    tete.x = tete.x + 1;

  snake.unshift(tete);
  return tete;
}

function collision_handler(tete, snake, cell_count) {
  if (tete.x < 0 || tete.x >= cell_count ||
      tete.y < 0 || tete.y >= cell_count)
    return true;

  let i = 1;
  while (i < snake.length) {
    if (tete.x === snake[i].x && tete.y === snake[i].y)
      return true;
    i = i + 1;
  }
  return false;
}

export { create_food, snake_move, collision_handler };
