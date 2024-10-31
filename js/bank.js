class bankAccount{
    #balance = 0;
    #deposit;
    #withdraw;
    #history;

    constructor(income){
        if(typeof income ==='number' && !isNaN(income)){
            this.#deposit = income;
            this.#balance += this.#deposit;
            this.#history = [];
        } else {
            console.log("Value you try to enter must be a number");
        }
    }

    get balance(){
        return this.#balance;
    }

    get history(){
        return this.#history;
    }

    get deposit(){
        return this.#deposit;
    }

    set deposit(newDeposit) {
        if(typeof newDeposit ==='number' && !isNaN(newDeposit)){
            this.#deposit = newDeposit;
            this.#balance += this.#deposit;
            const date = new Date();
            const time = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            const historyObj = {
                deposited: this.#deposit,
                balance: this.#balance,
                time: time,
            };

            this.#history.push(historyObj);
        } else {
            return 'Please enter a number';
        }
    }
}

const bal = new bankAccount(10);

console.log(bal.balance);

bal.deposit = 20;

console.log(bal.history);
console.log(bal.balance);