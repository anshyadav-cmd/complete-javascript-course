'use strict';

function add(a, b) {
  console.log(this);
  console.log(arguments);
}

add(1, 2);

const abc = function () {
  console.log(arguments);
};

abc();
