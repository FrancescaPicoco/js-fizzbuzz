for (let i = 1; i <= 100; i++) {  

    if ( i%3 == 0){
        console.log("FIZZ " ,i);
    }
    else if (i%5 == 0) {
        console.log("BUZZ" ,i);
    }
     if(i%15 == 0) {
        console.log("FIZZBUZZ" ,i);
    }
    else{
        console.log(i);
    }
}
