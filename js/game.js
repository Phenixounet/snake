/*
** game.js
** game logic
*/

function create_food(cell_count, snake) {
  let new_apple;
  let valid = false;

  while (!valid) {
    new_apple = {
      x: Math.floor(Math.random() * cell_count),
      y: Math.floor(Math.random() * cell_count)
    };

    let i = 0;
    valid = true;
    while (i < snake.length) {
      if (snake[i].x === new_apple.x && snake[i].y === new_apple.y)
        valid = false;
      i = i + 1;
    }
  }
  return new_apple;
}

function snake_move(snake, direction) {
  const head = { x: snake[0].x, y: snake[0].y };

  if (direction === 'up')
    head.y = head.y - 1;
  else if (direction === 'down')
    head.y = head.y + 1;
  else if (direction === 'left')
    head.x = head.x - 1;
  else if (direction === 'right')
    head.x = head.x + 1;

  snake.unshift(head);
  return head;
}

function collision_handler(head, snake, cell_count) {
  if (head.x < 0 || head.x >= cell_count ||
      head.y < 0 || head.y >= cell_count)
    return true;

  let i = 1;
  while (i < snake.length) {
    if (head.x === snake[i].x && head.y === snake[i].y)
      return true;
    i = i + 1;
  }
  return false;
}

export { create_food, snake_move, collision_handler };
