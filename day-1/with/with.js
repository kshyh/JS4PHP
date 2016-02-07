function a1() {
  // Uncomment the line below to see errors
  //'use strict';

  var obj = {
    a: 1,
    b: 2,
    c: 3
  };

  with (obj) {
    return a + b + c;
  };
}


