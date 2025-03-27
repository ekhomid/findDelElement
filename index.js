/*
Есть упорядоченная последовательность чисел от 1 до N. 
Из нее удалили одно число, а оставшиеся перемешали. 
Нужно написать функцию, которая по итоговому массиву находит удаленное число.
*/

function sort(mass) {
  var temp;
  for (var i = 0 ; i < (mass.length - 1) / 2 + 1 ; i++) {
    for (var j = 0 ; j < mass.length - 1 ; j++) {
      if (mass[j+1] < mass[j]) {
        temp = mass[j];
        mass[j] = mass[j+1];
        mass[j+1] = temp;
      }
    }
  }
  return mass;
}

// или встроенная сортировка mass_numb.sort() (вероятно O(n log n))

function findDelNumb(mass) {
  if (mass[0] != 1) return 1;
  
  var delNumber = 0;
  for (var i = 0 ; i < mass.length - 1 ; i++) {
    if (mass[i] + 1 != mass[i+1]) {
      delNumber = mass[i] + 1;
      break;
    }
  }
  if (delNumber == 0) {
    return (mass.length + 1);
  } else {
    return delNumber;
  }
}

// изящный способ
function findDelNumb2(mass) {
  var N = mass.length + 1;
  var summFirstMas = (N + 1) * N / 2;
  var summSecondMas = 0;
  for (var i = 0 ; i < mass.length ; i++) {
    summSecondMas += mass[i]; 
  }
  return summFirstMas - summSecondMas;
}

// изящный способ 2
function findDelNumb3(mass) {
  let result = 0;
  let N = mass.length + 1;
  for (var j = 1 ; j <= N ; j++){
    mass.push(j);
    console.log(mass);
  }
  for (let i = 0 ; i < mass.length ; i++){
     result ^= mass[i];  
  }
  return result;
}

var mass_numb = [2,1,4,5];
console.log(findDelNumb2(mass_numb));
