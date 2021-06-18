const person = {
    age: 25,

    tellAge : function() {

        // this - Person
        console.log(this);
        console.log(this.age);
        
    }.bind(this),

    // this - Window

    tellAge2: () => { // bind olayı ile aynı iş aslında arrow func bunu yapıyor
        console.log(this);
        console.log(this.age);
    }

}
person.tellAge2();