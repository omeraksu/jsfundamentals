// while döngüsü

    let i = 10;

    while(i < 1){ // sonsuz döngüden kaçınmak için arttır ya da azalt
        console.log(i);
        i++; // i += 1; da yapılabilinirdi.
    }
    while(i > 0){
        console.log(i);
        i -= 1;
        i -= 2; 
    }


// Break ve Continue


    let o = 0;
    
    while(o = 2){
        console.log(o);
        if(o == 5){
            break;
        }
        o++;
    }

    while(o < 10){
        if (o == 3 || o == 5 ){
            o++;
            continue;
        }
        console.log(o);
        o++;
        
    }


// Do While

    let i = 0;

    do {
        // buradaki olaylar bir kere çalıştırılıcak sonra alttaki koşul sağlanıyorsa devam edecek
    } while(i = 1) {
        // ikinci kısım
    }


// For


    const langs = ["python","swift","javascript"];

    let index = 0;

    while(index < langs.length){
        console.log(langs[index]);
        index++;
    }

    for (let index = 0; index < langs.length; index++){
        console.log(langs[index]);
    }

    langs.forEach(function(lang,index){ // lang olayı otomatik dizi elemanları
        console.log(lang,index);
    }); // şuradaki iş for ile aynı



//    Objeler üzerinde kullanımları ve map function

    const users = [
        {name:"ömer",age:23},
        {name:"ahmet",age:22},
        {name:"ali",age:21}
    ];

    const name = users.map(function(user){
        return user.name;
    });
    const age = users.map(function(user){
        return user.age;
    });

    console.log(name);
    console.log(age);


// For in


    const user = {
        name:"Ömer",
        age:25
    };

    for (let key in user){
        console.log(key,user[key]);
    }
