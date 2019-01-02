/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var y = 98 ;
var a = " bottles of juice on the wall! ";
var b = " bottles of juice! Take one down, pass it around... ";
var c = " bottles of juice on the wall!";
while (num>=1) {
    y===1 ? c = " bottle of juice on the wall!" : c ;
    y===0 ? c = " bottles of juice on the wall!" : c ;
    num===1 ? a = " bottle of juice on the wall! " : a ;
    num===1 ? b = " bottle of juice! Take one down, pass it around... " : b ;
    console.log(num+a+num+b+y+c);
    num= num-1;
    y= y-1;
}
