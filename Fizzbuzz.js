/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
    y = (x%15 === 0) ?"JuliaJames":((x%5 === 0 ? "James":(x%3 === 0 ?"Julia": x)));
    console.log(y);
    x+=1;
}
