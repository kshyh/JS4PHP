QUnit.test('Variable scope', function (assert) {

  var _ = 'FILL THE GAP',
      eq = assert.equal.bind(assert),
      throws = assert.throws.bind(assert);

  /**
   * A globally-scoped variable example
   */
  var a1 = 1;
  function one() {
    eq(a1, 1);
  }
  eq(a1, 1);
  one();
  eq(a1, 1);

  /**
   * A local scope example
   */
  var a2 = 1;
  function two(a2) {
    eq(a2, 5);
  };
  eq(a2, 1);
  two(5);
  eq(a2, 1);

  /**
   * Another local scope example
   */
  function three() {
    var a3 = 3;
    eq(a3, 3);
  }
  three();
  eq(typeof(a3), 'undefined'); // typeof does not throw reference exception

  /**
   * Intermediate: No such thing as block scope in JavaScript (ES5; ES6 introduces let)
   */
  var a4 = 1;

  function four() {
    if (true) {
      var a4 = 4;
      eq(a4, 4);
    }
    eq(a4, 4);
  }
  eq(a4, 1);
  four();
  eq(a4, 1);

  /**
   * Intermediate: Object properties
   */
  var a5 = 1;

  function Five() {
    this.a5 = 5;
    eq(a5, 1);
  }

  eq(a5, 1);
  eq(typeof new Five().a5, 'number');
  eq(a5, 1);
  eq(typeof Five(), 'undefined');
  throws(
    function () {
      console.log(Five().a5);
    }
  );
  eq(a5, 1);
  eq(window.a5, 5);

  /**
   * Advanced: Closure
   */
  var a6 = 1;

  var six = (function() {
    var a6 = 6;
    eq(a6, 6);

    return function dummy() {
      eq(a6, 6);
    };
  })();
  eq(a6, 1);

  /**
   * Advanced: Prototype-based scope resolution
   */
  var a7 = 1;

  function Seven() {
    this.a7 = 7;
    eq(a7, 1);
  }

  Seven.prototype.a7 = -1;
  Seven.prototype.b7 = 8;

  eq(a7, 1);
  var seven = new Seven();
  eq(a7, 1);
  eq(seven.a7, 7);
  eq(seven.b7, 8);

  /**
   * Global+Local: An extra complex Case introducing 'hoisting'.
   */
  var x1 = 5;

  (function () {
    eq(x1, undefined);
    var x1 = 10;
    eq(x1, 10);
  })();

  var x2 = 5;

  (function () {
    var x2;
    eq(x2, void 0);
    x2 = 10;
    eq(x2, 10);
  })();

  /**
   * Catch clause-scoped variable
   */
  var e = 5;
  eq(e, 5);
  try {
    throw 6;
  } catch (e) {
    eq(e, 6);
  }
  eq(e, 5);

  var e2 = 5;
  eq(e2, 5);
  eq(f2, undefined);
  try {
    throw 6;
  } catch (e2) {
    var f2 = 10;
    eq(e2, 6);
    eq(f2, 10);
  }
  eq(e2, 5);
  eq(f2, 10);

  /**
   * Eval cheating on lexical scoping
   */
  var a8 = 10;
  eq(a8, 10);

  function eight(code) {
    eval(code);
    eq(a8, 4);
  }
  eight('var a8 = 4;');
  eq(a8, 10);
  var tmp = eight;
  var eight = function(code) {
    eval(code);
    eq(a8, 55);
  };
  eight('a8 = 55;');
  eq(a8, 55);

});
