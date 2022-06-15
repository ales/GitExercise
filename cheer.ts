function cheer(parametr: string): string {
  return `${parametr} je cyp! Ostrava!!!`;
}

fetch("http://www.qda.cz").then((resp: Response) => {
  resp.blob().then((value: Blob) => {
    value.text().then((str: string) => {
      console.log(cheer(str));
    });
  });
});
