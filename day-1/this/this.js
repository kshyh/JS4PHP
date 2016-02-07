function a1() {
  'use strict';
  return this;
}

function a2() {
  return this;
}

function a3() {
  'use strict';

  var x = {
    a: 1,
    f: function () {
      return this;
    }
  };

  var y = {
    f: function () {
      return this.a;
    }
  };

  var z = {
    f1: function () {
      return this.f2();
    },
    f2: function () {
      return 'f2';
    },
    f3: function () {
      return f2();
    }
  };

  var f1 = z.f1;
  var boundF1 = z.f1.bind(z);
  var zz = {
    f1: z.f1,
    f2: function () { return 'fffffuuuu';},
    f3: z.f3
  };

  function f2() {
    return 'hello from the outside';
  }

  return {
    c1: x.f(),
    c2: x.f.apply(),
    c3: x.f.apply(window),
    c4: y.f.apply(x),
    c5: z.f1(),
    c6: z.f2(),
    c7: z.f3(),
    c8: f1(), // This example throws TypeError
    c9: boundF1(),
    c10: zz.f1(),
    c11: zz.f2(),
    c12: zz.f3()
  };
}

function a4() {
  return a3.apply({f2: function () { return 'a4'; }});
}
