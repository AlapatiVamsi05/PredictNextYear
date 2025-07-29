document.getElementById("predictYear").addEventListener("click", function() {
    let year = parseInt(document.getElementById("yearInput").value);
    let popup = document.getElementById("popup");
    let resultElement = document.getElementById("result");
    if(isNaN(year)){
        resultElement.innerText = "Please enter a year.";
    }
    else if(year < 0) {
        let resultyear = year+1;
        resultElement.innerText = "The next year is: " + resultyear +" B.C";
    }else if (year+1!=69){
        let resultyear = year+1;
        resultElement.innerText = "The next year is: " + resultyear;
    }else{
        let resultyear = year+1;
        resultElement.innerText = "The next year is: " + resultyear +" he he he he, nice year";
    }
    popup.style.display = "flex";
});
