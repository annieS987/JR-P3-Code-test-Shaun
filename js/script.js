// write your code here
// check if the current number is a multiple of 3 or 5 or both
var printNumbers = function(){
    if(i%3 == 0 && i%5 == 0){
        return "FizzBuzz";
    }else if(i%3 == 0){
        return "Fizz";
    }else if(i%5 == 0){
        return "Buzz";
    }else{
        return i;
    }
};

for (var i=1; i<=100; i++){
    document.write(printNumbers())
    document.write("<br>");
}

