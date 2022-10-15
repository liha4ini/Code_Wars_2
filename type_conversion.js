// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2

let out = document.querySelector('.out');

out.innerHTML = "" + 1 + 0;  //  10
out.innerHTML = "" - 1 + 0;  //  -1
out.innerHTML = true + false; //  1
out.innerHTML = 6 / '3';  //  2
out.innerHTML = '2' * '3'  //  6
out.innerHTML = 4 + 5 + 'px';  //  9px
out.innerHTML = "$" + 4 + 5;  //  $45
out.innerHTML = "4" - 2;  //  2
out.innerHTML = "4px" - 2;  //  NaN
out.innerHTML = "  -9  " + 5;  //  -9 5
out.innerHTML = "  -9  " - 5;  //  -14
out.innerHTML = null + 1;  //  1
out.innerHTML = underfined + 1;  //  1
out.innerHTML = " \t \n" - 2; // 1
