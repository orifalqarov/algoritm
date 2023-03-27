var arr = [];

  function summOfArray(arr){
    var pro = 0;
    for (i = 0; i < arr.length; i++){
         pro = pro + arr[i];
    }
    return pro;
  }
  var result =summOfArray([1, 3, -4, 40 ,3])

  console.log(result);
