document.getElementById("predictYear").addEventListener("click", function() {
    let year = parseInt(document.getElementById("yearInput").value);
    let result = 1+year;
    console.log("The next year is: " + result);
    let popup = document.getElementById("popup");
    let resultElement = document.getElementById("result");
    resultElement.innerText = "The next year is: " + result;
    popup.style.display = "flex";
});
