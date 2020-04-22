"use strict";
var mike = {
    age: 22,
    name: "Mike",
    say: function () {
        return ("My name is " + this.name + " and I'm " + this.age + " years old! and");
    },
};
function sayIt(person) {
    return person.say();
}
console.log(sayIt(mike));
//# sourceMappingURL=app.js.map