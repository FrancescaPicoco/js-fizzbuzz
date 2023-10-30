
const container = document.getElementById("container"); 

for (let i = 1; i <= 100; i++) {  

    if(i%15 == 0) {
        const element = document.createElement("p");
        element.innerHTML = `${i}`;
        element.classList.add("fizzbuzz");
        container.append(element);
        console.log("FIZZBUZZ" ,i);
    } 
    else if( i%3 == 0){
        const element = document.createElement("p");
        element.innerHTML = `${i}`;
        element.classList.add("fizz");
        container.append(element);
        console.log("FIZZ " ,i);
    }
    else if (i%5 == 0) {
        const element = document.createElement("p");
        element.innerHTML = `${i}`;
        element.classList.add("buzz");
        container.append(element);
        console.log("BUZZ" ,i);
    }
    else{
        const element = document.createElement("p");
        element.innerHTML = `${i}`;
        element.classList.add("others");
        container.append(element);
        console.log(i);
    }
}
