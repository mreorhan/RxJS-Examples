const { Observable, from } = require('rxjs');

  //producer
  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    //like multiple return
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
    if(1==0)
    subscriber.error("error")
  });
   
  console.log('just before subscribe');
  //consumer
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');
  //OR
  observable.subscribe(
    x=>console.log(x),
    err=>console.log(err),
    ()=>console.log("done")
  )


  const observable2=from([1,2,3,4,5])
  observable2.subscribe(x=>console.log(x))