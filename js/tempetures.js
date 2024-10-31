class temperatures{
    #celcius =0;
    #fahrenheit =0;

    constructor(celcius, fahrenheit){
        this.#celcius = celcius;
        this.#fahrenheit = fahrenheit;
    }

    get celcius(){
        return this.#celcius;
    }

    get fahrenheit(){
        return this.#fahrenheit;
    }

    set toCelcius(degrees){
        this.#celcius = degrees;
        this.#fahrenheit = ((this.#celcius * (9/5))) + 32;
    }

    set toFahrenheit(degrees){
        this.#fahrenheit = degrees;
        this.#celcius = ((this.#fahrenheit - 32) * (5/9)).toFixed(2);
    }
}

const temp = new temperatures(15, 14);

console.log(temp.fahrenheit);

temp.toFahrenheit = 90;

console.log(temp.celcius);
console.log(temp.fahrenheit);