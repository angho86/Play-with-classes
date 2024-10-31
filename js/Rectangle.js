class rectangle{
    #width;
    #height;
    #area;
    #perimeter;
    constructor (width, height){
        this.#width = width;
        this.#height = height;   
        this.#area = this.#width * this.#height;
        this.#perimeter = (this.#width + this.#height) * 2;
    }

    get width(){
        return this.#width;
    }

    get height(){
        return this.#height;
    }

    get area(){
        return this.#area;
    }

    get perimeter(){
        return this.#perimeter;
    }

    set width(newWidth){
        this.#width = newWidth;
        this.#area = newWidth * this.#height;
        this.#perimeter = (newWidth + this.#height) * 2;
    }

    set height(newHeight){
        this.#height = newHeight;
        this.#area = this.#width * newHeight;
        this.#perimeter = (this.#width + newHeight) * 2;
    }

}





