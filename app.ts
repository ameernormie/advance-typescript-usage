import * as Interfaces from "./interfaces";

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

console.log(
  "\n\n********************Tuple and Union Types**********************"
);

let location: Interfaces.KeyValuePair<string, boolean> = ["ibiza", true];
