function buildBoard(n) {
  const arr = [];
  for (let r = 0; r < n; r++) {
    arr.push([]);
    for (let c = 0; c < n; c++) {
      arr[r].push(r + "," + c);
    }
  }
  return arr;
}

function knightTravails(board, start, end, q = []) {
  const visited = new Set(start);
  q.push([start, start, 0]);

  while (q.length > 0) {
    const [current, path, distance] = q.shift();

    if (current === end) return [path.split(":"), distance];

    const [row, col] = current.split(",").map((s) => parseInt(s));

    const possibleWays = [
      [row - 2, col + 1],
      [row - 1, col + 2],
      [row + 1, col + 2],
      [row + 2, col + 1],
      [row + 2, col - 1],
      [row + 1, col - 2],
      [row - 1, col - 2],
      [row - 2, col - 1],
    ];

    for (let [row, col] of possibleWays) {
      const rowInbound = 0 <= row && row < board.length;
      const colInbound = 0 <= col && col < board.length;
      const position = row + "," + col;

      if (rowInbound && colInbound && !visited.has(position)) {
        visited.add(position);
        q.push([position, path + ":" + position, distance + 1]);
      }
    }
  }

  return false;
}

export { buildBoard, knightTravails };
