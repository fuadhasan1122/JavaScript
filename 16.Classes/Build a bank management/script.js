

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.transactions.push({ type: "deposit", amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.transactions.push({ type: "withdraw", amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}


const myAccount = new BankAccount();


myAccount.deposit(200);
myAccount.withdraw(50);
myAccount.deposit(150);
myAccount.withdraw(75);
myAccount.deposit(100);


console.log(myAccount.checkBalance());        
console.log(myAccount.listAllDeposits());       
console.log(myAccount.listAllWithdrawals());    




