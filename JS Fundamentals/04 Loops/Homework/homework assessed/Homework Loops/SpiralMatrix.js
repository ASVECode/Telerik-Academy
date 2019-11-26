let n = 4;
let matrix = [];
let row = 0;
let col = 0;
let direction = "right";
let counter = 0;

for (i = 0; i < n; i++) {
  matrix.push([]);
}
for (let number = 1; number <= n * n; number++) {
  switch (direction) {
    case "right":
      matrix[row][col] = number;
      col++;
      if (col === n - 1 - counter) {
        direction = "down";
      }
      break;
    case "down":
      matrix[row][col] = number;
      row++;
      if (row === n - 1 - counter) {
        direction = "left";
      }
      break;
    case "left":
      matrix[row][col] = number;
      col--;
      if (col === 0 + counter) {
        direction = "up";
      }
      break;
    case "up":
      matrix[row][col] = number;
      row--;
      if (row === 1 + counter) {
        direction = "right";
        counter++;
      }
      break;
  }
}

let line = "";
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    line = line + " " + matrix[i][j];
  }
  console.log(line);
  line = "";
}
