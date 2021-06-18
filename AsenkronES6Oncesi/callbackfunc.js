    function process1(callback) {
        setTimeout(() => {
            console.log("naber?");
            callback();
        }, 3000);
    }

    function process2(){
        setTimeout(() => {
            console.log("ooo toprağam");
        }, 2000);
    }

    process1(process2);


    const langs = ["Python","Java","C++"];

    function addLang(lang,callback){
        setTimeout(() => {
            langs.push(lang);
            console.log("eklendi");
            callback();
        }, 2000);
    }

    function getAllLangs(){
        setTimeout(() => {
            langs.forEach(lang => {
                console.log(lang);
            });
        }, 1000);
    }

    addLang("javascript",getAllLangs);