function a1() {
  function A () {
    this.x1 = 3;
    this.x2 = 6;

    this.f1 = function () {
      return this.x1 + this.x2;
    };
  }

  A.prototype.f2 = function () {
    return this.x1 - this.x2;
  };

  var a1 = new A();
  var a2 = new function () {
    this.x1 = 10;
    this.x2 = 5;

    this.f1 = function () {
      return this.x1 + this.x2;
    };
  }();

  var b1 = Object.create(null);
  var b2 = Object.create(new A());
  var b3 = Object.create(b2);
  var b4 = Object.create({});
  var b5 = Object.create([]);
  var b6 = Object.create("Test");
  var c1 = {};
}

function a2() {
  var o = {};

  o.a = 1;
  // is equivalent to:
  Object.defineProperty(o, 'a', {
    value: 1,
    writable: true,
    configurable: true,
    enumerable: true
  });


  // On the other hand,
  Object.defineProperty(o, 'a', { value: 1 });
  // is equivalent to:
  Object.defineProperty(o, 'a', {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: false
  });
}

function a3() {
  var o = {};
  Object.defineProperty(o, 'a', {
    get: function() { return 1; },
    configurable: false
  });

  Object.defineProperty(o, 'a', { configurable: true }); // throws a TypeError
  Object.defineProperty(o, 'a', { enumerable: true }); // throws a TypeError
  Object.defineProperty(o, 'a', { set: function() {} }); // throws a TypeError (set was undefined previously)
  Object.defineProperty(o, 'a', { get: function() { return 1; } }); // throws a TypeError (even though the new get does exactly the same thing)
  Object.defineProperty(o, 'a', { value: 12 }); // throws a TypeError

  console.log(o.a); // logs 1
  delete o.a; // Nothing happens
  console.log(o.a); // logs 1
}

function a4() {
  function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this, 'temperature', {
      get: function() {
        console.log('get!');
        return temperature;
      },
      set: function(value) {
        temperature = value;
        archive.push({ val: temperature });
      }
    });

    this.getArchive = function() { return archive; };
  }

  var arc = new Archiver();
  arc.temperature; // 'get!'
  arc.temperature = 11;
  arc.temperature = 13;
  arc.getArchive(); // [{ val: 11 }, { val: 13 }]
}
