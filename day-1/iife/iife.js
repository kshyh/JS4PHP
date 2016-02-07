function a1() {
  // This example is broken on purpose

  // function () {
  //   return 'a1';
  // }();
}

function a2() {
  return (function () {
    return 'a2';
  }());
}

function a3() {
  return (function () {
    return 'a3';
  })();
}
