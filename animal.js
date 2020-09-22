class animal {
  constructor(sound, name) {
    this.sound = sound;
    this.name = name;
  }

  speak() {
    console.log(`${this.sound} makes a noise.`);
  }
  sayName() {
    console.log(`My name is ${this.name}.`);
  }
}

class dog extends animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.name = name;
    this.sound = sound;
    this.breed = breed;
  }
  get myName() {
    return this.name;
  }
  set myNameIs(newName) {
    this.name = newName;
  }
  listBreed() {
    console.log(this.breed);
  }
}

let d = new dog("Patches", "Yip", "Corgi");
console.log(d);
d.speak();
d.sayName();
d.listBreed();

let c = new dog("Riley", "Woof", "Lab");
console.log(c);
c.speak();
c.sayName();
c.listBreed();

d.myNameIs = "Patches";
console.log(d);
d.sayName();
