function a1() {
  function throwsBadly() {
    throw Error('Sad code');
  }

  try {
    setTimeout(throwsBadly, 0);
  } catch (e) {
    return e;
  }

  return 'nothing broke';
}

function a2() {
  function mayThrowBadly(error, success) {
    try {
      throw Error('Sad code');
      success('Yay!');
    } catch (e) {
      error(e);
    }
  }

  mayThrowBadly(function (e) {
    console.log(e);
  }, function (s) {
    console.log(s);
  });
}

function a3() {
  function str(s) {
    if (typeof s === 'string') {
      return s;
    } else {
      throw TypeError('Expected string!');
    }
  }
  function repeat(s) {
    s = str(s);
    return str(s + s);
  }

  try {
    return repeat(1);
  } catch (e) {
    console.log(e);
  }
  return repeat('2');
}
