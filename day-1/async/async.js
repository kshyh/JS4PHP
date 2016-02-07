function a1() {
  var list = [1, 2, 3];

  for (var x in list) {
    setTimeout(function () {
      console.log(list[x] * 2);
    }, 1000);
  }
}

function a2() {
  var list = [1, 2, 3];

  for (var x in list) {
    setTimeout(function () {
      console.log(list[x] * 2);
    }, 0);
  }
}

function a3() {
  var list = [1, 2, 3];

  for (var x in list) {
    setTimeout(function (a) {
      // console.log(x);
      console.log(list[a] * 2);
    }, 0, x);
  }
}
