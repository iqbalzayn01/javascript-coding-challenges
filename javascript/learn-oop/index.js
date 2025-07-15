// Bank Account
class BankAccount {
  constructor(accountNumber, accountHolderName) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = 0;
  }

  // Methode deposite
  deposite(amount) {
    this.balance += amount;
    return `Balance: ${this.balance}`;
  }

  // Methode withdraw
  withdraw(amount) {
    if (this.balance < amount) {
      return 'Saldo anda tidak cukup';
    }

    this.balance -= amount;
    return this.balance;
  }

  // Methode check balance
  checkBalance() {
    return `Saldo: ${this.balance}`;
  }
}

const myAccount = new BankAccount(2318676, 'Nazwa');
console.log(myAccount.checkBalance());
console.log(myAccount.deposite(5000000));
console.log(myAccount.withdraw(3375000));
console.log(myAccount.checkBalance());
