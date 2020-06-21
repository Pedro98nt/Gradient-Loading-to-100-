var numbers = document.querySelector('.numbers');

var progress = document.querySelector('.progress');

var completed = document.querySelector('.completed');
var count= 4;
var per = 16;
var loading = setInterval(animate, 50);
function animate(){
    if(count == 100 && per == 400){
        numbers.classList.add("completed-blink");
        completed.style.display = "block";
        clearInterval(loadingBar);
    }
    else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        numbers.textContent = count + '%';
    }
}