function a1() {
  function x() {
    var a = 10;

    return function y() {
      var b = 5;
      return b;
    };
  }

  return x()();
}

function a2() {
  function x() {
    var a = 10;

    function y() {
      var b = 5;
      return a + b;
    }

    return y;
  }

  return x()();
}

function a3() {
  var x = (function () {
    var c = 0;

    return function() {
      c += 1;
      return c;
    };
  })();

  var tmp = x();
  tmp = 22;

  return {
    c1: x(),
    c2: x(),
    c3: x()
  };
}

function a4() {
  var x = (function () {
    var c = {
      last: 0
    };

    return function () {
      c.last += 1;
      return c;
    };
  }());

  var tmp = x();
  tmp.last = 22;

  return {
    c1: x(),
    c2: x(),
    c3: x()
  };
}

function a5() {
  var x = (function () {
    var c = {
      last: 0
    };

    return function () {
      c.last += 1;
      return {
        c: c,
        val: c.last
      };
    };
  }());

  var tmp = x();
  tmp.c.last = 22;

  return {
    c1: x(),
    c2: x(),
    c3: x()
  };
}

function a6() {
  function c(n) {
    return function () {
      return n;
    };
  }

  var c1 = c(1);
  var c2 = c(2);

  return {
    c1: c1(),
    c2: c2()
  };
}
