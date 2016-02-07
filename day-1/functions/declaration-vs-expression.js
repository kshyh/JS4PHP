function a1() {
  function A() {}; // function declaration
  var B = function () {}; // function expression

  A();
  B();
}

function a2() {
  A();
  C();
  B();

  function A() {};
  var B = function C() {};
}
