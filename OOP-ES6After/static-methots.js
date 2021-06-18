class Matematik {
    sqrt(x) {
        console.log(x*x);
    }
    static cube(x) { // statik fonksiyonlar prototipe yazılmıyor. Object.create() methodu gibi dilendiği yerde çağrılabilinir.
        console.log(x*x*x);
    }
}
Matematik.cube(3);
const math = new Matematik();
console.log(math);
math.sqrt(3);
// Matematik.sqrt(12); // error