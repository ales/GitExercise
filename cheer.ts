function cheer(parametr: string): string {
  return `${parametr} je cyp! Ostrava!!!`;
}

fetch("http://www.qda.cz").then((resp: Response) => {
  resp.text().then((str: string) => {
    console.log(cheer(str));
  });
});

(async () => {
  const resp: Response = await fetch("http://www.qda.cz");
  const str: string = await resp.text();

  console.log(cheer(str));
})();
