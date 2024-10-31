class bankAccount{
    #balance;
    #deposit;
    #withdraw;
    #history;

    constructor(income, withdraw){
        if(typeof income ==='number' && !isNaN(income)){
            this.#deposit = income;
            this.#withdraw = withdraw;
            this.#balance = this.#balance + this.#deposit;
            this.#history = [];
        } else {
            console.log("Value you try to enter must be a number");
        }
    };

    get balance(){
        return this.#balance;
    }

    get history(){
        return this.#history;
    }
}

const bal = new bankAccount(10);

console.log(bal.balance);