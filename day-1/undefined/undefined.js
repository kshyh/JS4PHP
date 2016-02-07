function a1() {
  return (function (undefined) {
    return undefined;
  }(5));
}

function a2() {
  return (function (undefined) {
    return void 0;
  }(5));
}

function a3() {
  window.undefined = 3;
  return window.undefined;
}

function a4() {
  var x;
  if (x === undefined || typeof x === 'undefined') {
    return 'x is undefined';
  }
  return 'x is defined';
}

function a5() {
  if (typeof x === 'undefined') {
    console.log('x is undefined - first check');
  }

  try {
    if (x === undefined) {
      console.log('x is undefined - second check');
    }
  } catch (e) {
    console.log(e);
  }

  try {
    if (x === void 0) {
      console.log('x is undefined - third check');
    }
  } catch (e) {
    console.log(e);
  }
}
