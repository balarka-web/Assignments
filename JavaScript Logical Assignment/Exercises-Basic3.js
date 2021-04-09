//2.
 x=5
x
//3.
function half(x){
    return(x/2);
}
half(x)
//4.
function seven(){
    x=7;
}
seven()

//5.
function cal(a,b,c){
    return((a+b)/c);
}
cal(1,1,0)

//7.

<html>
    <body>
<script src="file1.js" type="text/javascript"></script> 
    <script>
    largeFunction();
    </script>
    </body>
</html>

//file1.js
function largeFunction(){
    document.write("hello")
}



//8.
function isEven(n){
if(n%2==0)
console.log("even")
else
console.log("odd")
}
isEven(5)