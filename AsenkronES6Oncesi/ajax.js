// Http Status
// 200 : OK
// 403 : Forbiden
// 404 : Not Found
// 505 : Internal Server Error
// 0 : Requestnot initialized
// 1 : Server connection established
// 2 : request received
// 3 : processing request
// 4 : request finished and response is ready

document.getElementById('btn').addEventListener('click',function(){
    
    // XHR Create
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() { // Yeni yöntem - this.readyState 4'e eşit olduğunda otomaik olarak çalışır.
        if (this.status === 200) {
            document.getElementById('ajax').textContent = this.responseText;
        }
    }


    // xhr.onreadystatechange = function() {  // Eski Yöntem
    //     if (this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.open("GET","example.txt",true);
    xhr.send();
});