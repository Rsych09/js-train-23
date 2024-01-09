class User {
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }

  sendMessage(message) {
    console.log(`${this.name} відправив повідомлення: ${message}`);
    this.messenger.sendMessage(message);
  }

  receiveMessage(user, message) {
    console.log(`${this.name} отримав повідомлення від ${user.name}: ${message}`);
  }
}

class SMSMessenger {
  static sendMessage(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 8 ====================================");

const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

john.sendMessage("Привіт!");
jane.sendMessage("Привіт!");
