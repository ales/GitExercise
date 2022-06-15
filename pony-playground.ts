type InternalMemory = number | null; // just for the sake of science; nullable -- is this actually the JS way?

interface Pony {
  run(): Pony;
  play(song: string): void;
  publicProperty: string; // if this wasn't pressent, ponyFactory wouldn't compile for not adhering to interface == return type
}

function ponyFactory(emojiFromParam: string = "📢"): Pony {
  const _privateConst = 42;
  let _privateProperty: InternalMemory = 0;

  const _setEngines = (): void => {
    // privateProperty++; object is possibly null error!
    _privateProperty!++; // bang! it's not! -- this is kinda hack, look 1 down
    if (_privateProperty) _privateProperty++; // this compiles fine, what a smart compiler! this is the way!
  };

  function _cheerUp(): void {
    if (_privateProperty) _privateProperty += Math.random() > 0.8 ? 10 : 1; // 20% chance for +10
  }

  return {
    // object structure starts here { <---
    // i wanted the previous comment to be at the same line as the "return {" but the prettier says no :(
    run(): Pony {
      _setEngines();
      _cheerUp();

      console.log("Run!");
      return this; // context is king!
    },
    play(song: string): void {
      console.log(
        `🎶 ${song} @ ${_privateConst * _privateProperty!} ${
          this.publicProperty
        }`
      );
    },
    publicProperty: emojiFromParam, // no way to write the type explicitly?
  }; // object structure ends here
}

ponyFactory().run().play("Fortunate Son – Creedence Clearwater Revival");

let myVeryPony: Pony = ponyFactory();

myVeryPony.publicProperty = "💩";

myVeryPony.run().run().run().play("Metal!");
