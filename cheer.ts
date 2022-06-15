function cheer(parametr: string): string {
  return `${parametr} je cyp! Ostrava!!!`;
}

type InternalMemory = number; // just for the sake of science

interface Pony {
  run(): Pony;
  play(s: string): void;
  publicProperty: string; // if this wasn't pressent, ponyFactory wouldn't compile for not adhering to interface == return type
}

function ponyFactory(emojiFromParam: string = "📢"): Pony {
  const privateConst = 42;
  let privateProperty: InternalMemory | null = 0; // nullable -- is this actually the JS way?

  return {
    // object structure starts here { <---
    // i wanted the previous comment to be at the same line as the "return {" but the prettier says no :(
    run(): Pony {
      // privateProperty++; object is possibly null error!
      privateProperty!++; // bang! it's not!
      console.log("Run!");
      return this;
    },
    play(song: string): void {
      console.log(
        `🎶 ${song} @ ${privateConst * privateProperty!} ${this.publicProperty}`
      );
    },
    publicProperty: emojiFromParam, // no way to write the type explicitly?
  };
}

ponyFactory().run().play("Fortunate Son – Creedence Clearwater Revival");

let myVeryPony: Pony = ponyFactory();

myVeryPony.publicProperty = "💩";

myVeryPony.run().run().run().play("Metal!");
