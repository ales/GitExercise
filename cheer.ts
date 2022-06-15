function cheer(parametr: string): string {
  return `${parametr} je cyp! Ostrava!!!`;
}

type InternalMemory = number; // just for the sake of science

interface Pony {
  run(): Pony;
  play(song: string): void;
  publicProperty: string; // if this wasn't pressent, ponyFactory wouldn't compile for not adhering to interface == return type
}

function ponyFactory(emojiFromParam: string = "📢"): Pony {
  const privateConst = 42;
  let privateProperty: InternalMemory | null = 0; // nullable -- is this actually the JS way?

  const _setEngines = () => {
    // privateProperty++; object is possibly null error!
    privateProperty!++; // bang! it's not!
    if (privateProperty) privateProperty++; // but this compiles too, what a smart compiler!
  };

  return {
    // object structure starts here { <---
    // i wanted the previous comment to be at the same line as the "return {" but the prettier says no :(
    run(): Pony {
      _setEngines(); // dunno what's the correct convention for private functions naming
      console.log("Run!");
      return this; // context is king!
    },
    play(song: string): void {
      console.log(
        `🎶 ${song} @ ${privateConst * privateProperty!} ${this.publicProperty}`
      );
    },
    publicProperty: emojiFromParam, // no way to write the type explicitly?
  }; // object structure ends here
}

ponyFactory().run().play("Fortunate Son – Creedence Clearwater Revival");

let myVeryPony: Pony = ponyFactory();

myVeryPony.publicProperty = "💩";

myVeryPony.run().run().run().play("Metal!");
