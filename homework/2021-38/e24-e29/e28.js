class Dog {
  constructor(name) {
    this.name = name;
  }
  sniffButt() {
    console.log(this.name + ' sniffs butt');
  };
}
bern = new Dog("bern");
bern.sniffButt();