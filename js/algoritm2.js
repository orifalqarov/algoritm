var array = [];

function number(num) {
  for (var i = 1; i <= num; i++) {
    array.push(i);
  }

  var demo = 0;
  for (var i = 0; i < array.length; i++) {
    demo = demo + array[i];
    console.log(array[i]); // array qiymatlari 1 -> num
  }
  return demo;
}

var result = number(10);

console.log(array); //array [1 -> num]

console.log(result); // Arraydagi sonlar yig’indisi
