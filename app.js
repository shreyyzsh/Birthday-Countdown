function date() {
    const now = new Date();
    const birthdate = new Date('2025-04-27T13:00:00');

    const difference_ms = Math.abs(birthdate - now);
    const duration = Math.floor(difference_ms/1000);

    timer(duration);
}

function formatTime(seconds) {
    const minutes = Math.floor((seconds/60));
    const hours = Math.floor((seconds/3600));
    const days = Math.floor(hours/24);

    return `${days<10?'0':''}${days}:${(hours%24)<10?'0':''}${hours%24}:${(minutes%60)<10?'0':''}${minutes%60}:${(seconds%60)<10?'0':''}${seconds%60}`;
}

function display(seconds) {
    document.getElementById('timer').textContent = formatTime(seconds);
    console.log(formatTime(seconds));
}

function timer(duration) {
    let timeLeft = duration;
    display(timeLeft);

    let timeInterval = setInterval(()=>{
        timeLeft--;
        display(timeLeft);
        
        if (timeLeft<=0) {
            clearInterval(timeInterval);
            alert("Happy Birthday");
        }

    },1000)


}

window.addEventListener('load', date());
