// Set Timeout

    setTimeout(() => {
        console.log("naber toprağam");
    }, 1500);


// Set Interval
    let i = 0;
    let value = setInterval(() => { // içeriyi tekrar tekrar çalıştırıyor
        i++;
        console.log(i);
    }, 1000);

    // clear interval ile durdurabiliriz.
    document.getElementById('btn').addEventListener('click',function(){
        clearInterval(value)
    });