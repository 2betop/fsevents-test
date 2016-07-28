require('fsevents');

while (true) {
  var i = 99999999;

  while(i--) {
    if (i % 500) {
      process.stdout.write('.');
    }
  }
}
