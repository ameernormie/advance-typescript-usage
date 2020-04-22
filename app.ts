interface Person {
  age: number;
  name: string;
  say(): string;
}

let mike = {
  age: 22,
  name: "Mike",
  say: function () {
    return (
      "My name is " + this.name + " and I'm " + this.age + " years old! and"
    );
  },
};

function sayIt(person: Person) {
  return person.say();
}

console.log(sayIt(mike));
