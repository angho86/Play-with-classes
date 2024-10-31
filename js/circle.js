class circle{
    #radius;
    #area;
    #length;
    constructor(radius){
        this.#radius = radius;
        this.#area = (Math.PI * Math.pow(this.#radius, 2)).toFixed(2);
        this.#length = (2 * Math.PI * this.#radius).toFixed(2);
    }

    get radius(){
        return this.#radius;
    }

    get area(){
        return this.#area;
    }

    get length(){
        return this.#length;
    }

    set radius(newRadius){
        this.#radius = newRadius;
        this.#area = (Math.PI * Math.pow(newRadius,2)).toFixed(2);
        this.#length = (2 * Math.PI * newRadius).toFixed(2);
    }
}
