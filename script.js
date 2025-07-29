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
    let progress = document.getElementById("progress");
    let popupcontent = document.getElementById("popupcontent");
    let a = [0,16,25,47,50,69,81,99,99,99,99,100];
    popup.style.display = "flex";
    popupcontent.style.display = "none";
    progress.style.display = "block";
    function loadingprogress(value){
        let progressBar = document.getElementById("progressbar");
        let progressValue = document.getElementById("progressvalue");
        progressBar.style.width = value+"%";
        progressValue.innerText = value + "%";
    }
    for(let i=0;i<a.length;i++){
        setTimeout(() => {
            loadingprogress(a[i]);
        }, i*200);
    }
    setTimeout(() => {
        progress.style.display = "none";
        popupcontent.style.display = "flex";
    }, (a.length + 1) * 200);
});