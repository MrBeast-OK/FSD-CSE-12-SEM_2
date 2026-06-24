function checkNumber() {

    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerHTML = "Please enter a number";
        return;
    }

    if (number % 2 === 0) {
        result.innerHTML = number + " is Even";
        result.style.color = "green";
    } 
    else {
        result.innerHTML = number + " is Odd";
        result.style.color = "red";
    }
}