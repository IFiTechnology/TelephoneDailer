class Telephone {
  constructor() {

    this.observers = [];

  }
  addPhoneNumber(observer) {
    this.observers.add(observer);
   
  }
  removePhoneNumber(observer) {

    this.observers.delete(observer);
  }
  dialPhoneNumber(number) {

    this.observers.forEach((observer) => observer(number));
  }
}

const telephone = new Telephone();

const observer1 = (number) => {

  console.log(number);
};
const observer2 = (number) => {
  console.log(`Now Dialing ${number}`);
};

telephone.addPhoneNumber(observer1);
telephone.addPhoneNumber(observer2);
telephone.dialPhoneNumber("09050256750");
