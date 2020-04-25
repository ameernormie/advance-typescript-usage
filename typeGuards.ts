interface Bird {
  fly: () => void;
  layEggs: () => void;
}

interface Fish {
  swim: () => void;
  layEggs: () => void;
}

function getSmallPet(): Fish | Bird {
  return {
    fly: () => console.log("fly fly"),
    layEggs: () => console.log("lay eggs"),
  };
}

/** Type Guard checks for type fish */
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

/** Type Guard checks for type fish */
function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

let pet = getSmallPet();

if (isBird(pet)) {
  pet.fly();
}
