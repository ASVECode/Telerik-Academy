let n = 4;
let line = '';


for (i = 0; i < n; i++) {
  for (j = 1; j <= n; j++) {
    line = line + ' ' + (j + i);
  }
  console.log(line);
  line = '';
}