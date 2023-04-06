const pathFinder = (area) => {
  let matrix = area.split("\n").map((row) => row.split("").map(Number));
  let n = matrix.length;
  let distance = new Array(n).fill().map(() => new Array(n).fill(Infinity));
  let queue = [[0, 0, 0]];
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  distance[0][0] = 0;

  while (queue.length) {
    let [x, y, z] = queue.shift();

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      let nz = Math.abs(matrix[nx][ny] - matrix[x][y]);

      if (distance[nx][ny] > z + nz) {
        distance[nx][ny] = z + nz;
        queue.push([nx, ny, z + nz]);
      }
    }
  }

  return distance[n - 1][n - 1];
};
