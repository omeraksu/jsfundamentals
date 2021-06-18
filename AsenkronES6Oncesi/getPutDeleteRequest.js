
// This, Arrow Func, Bing Olayı

    const person = {
        age: 25,

        tellAge: function(){
            
            // this Person objsini gösteriyor.
            console.log(this);
            console.log(this.age);

        }.bind(this), // this'i window'a çektik.

        tellAge2: () => { 
            
            // arrow func direkt this'e bağladı (bind gibi)
            console.log(this);
            console.log(this.age);

        }

        // this -> Window

    }

    person.tellAge();


// Ajax, Callback, Http Request


class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // GET request
    get(url,callback){
        this.xhr.open("GET",url); // bağlantı açık
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText); // istek bitti
            } else { 
                // hata durumu
                callback("hata var kanki",null)
            }
        }
        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON olarak göndereceğimizi belirttik
        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            } else {
                callback("Hata var",null);
            }
        }
        this.xhr.send(JSON.stringify(data))
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            } else {
                callback("Hata var karşim",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,"Veriyi sildik gitti")
            } else {
                callback("Silemedik karşim",null)
            }
        }
        this.xhr.send();
         
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        console.log(response);
    } else {
        console.log(err);
    }
})

request.post("https://jsonplaceholder.typicode.com/albums",{userId:3,title:"director"},function(err,veri){
    if(err === null){
        console.log(veri);
    } else {
        console.log(err);
    }
})

request.put("https://jsonplaceholder.typicode.com/albums/4",{userId:5,title:"omer naber?"},function(err,update){
    if(err === null){
        console.log(update);
    } else {
        console.log(err);
    }
})

request.delete("https://jsonplaceholder.typicode.com/albums/4",function(err,sildik){
    if(err === null){
        console.log(sildik);
    } else {
        console.log(err);
    }
})