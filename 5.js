class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  calculateFee(amount) {
    return amount * 1.02;
  }
}

class WalletTransfer {
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem;
  }

  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    return this.transferSystem.processTransfer(calculatedAmount);
  }

  calculateFee(amount) {
    return amount * 1.2;
  }
}

console.log("Завдання 5 ====================================");

// Створюємо екземпляри BankTransfer та використовуємо адаптер для використання методів WalletTransfer через BankTransfer API
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const wallet = new WalletTransfer();
const adapter = new TransferAdapter(wallet);
adapter.initiateTransfer(10);
