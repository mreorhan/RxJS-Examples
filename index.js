const { range, of } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const print = val => console.log(JSON.stringify(val))

print(of(1, 2, 3));

range(1, 20)
.pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
)
.subscribe(x => console.log(x));
