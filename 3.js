class TeaMaker {
  makeTea() {
    this.boilWater();
    this.addTeaLeaves();
    this.steepTea();
    this.pourIntoCup();
    this.addCondiments();
    this.serveTea();
  }

  boilWater() {
    console.log('Кип\'ятимо воду....');
  }

  addTeaLeaves() {
    console.log('Додаємо чайні листки....');
  }

  steepTea() {
    console.log('Заварюємо чай....');
  }

  pourIntoCup() {
    console.log('Переливаємо чай в чашку....');
  }

  addCondiments() {
    // Цей метод залишається пустим, оскільки він може бути перевизначений у підкласах
  }

  serveTea() {
    console.log('Чай подається!');
  }
}

class GreenTeaMaker extends TeaMaker {
  addCondiments() {
    console.log('Додаємо мед, щоб приготувати зелений чай...');
  }
}

class BlackTeaMaker extends TeaMaker {
  addCondiments() {
    console.log('Додаємо мед, щоб приготувати чорний чай...');
  }
}

console.log("Завдання 3 ====================================");

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.makeTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.makeTea();
