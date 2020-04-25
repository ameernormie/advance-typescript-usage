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

console.log(
  "********************Function Overloading (Type Guards)**********************"
);

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
  let returnValue: Array<string> = [];
  if (typeof bookProperty === "boolean") {
    // Return based on available
    returnValue = ["available number one"];
  }
  if (typeof bookProperty === "string") {
    returnValue = ["Author based"];
  }
  return returnValue;
}

console.log(getTitles("StringParam"));
console.log(getTitles(true));
