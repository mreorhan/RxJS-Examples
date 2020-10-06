const { range, of ,Observable } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const print = val => console.log(JSON.stringify(val))

print(of(1, 2, 3));

range(1, 20)
.pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
)
.subscribe(x => console.log(x));

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
   
  console.log('just before subscribe');
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');