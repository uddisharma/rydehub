export function processAddress(input: string) {
  let lines = input.split("\n");
  return lines.map((line: string) => {
    let words = line?.split(" ");
    let firstLine = words.slice(0, -3).join(" ");
    let secondLine = words.slice(-3).join(" ");
    return { firstLine, secondLine };
  });
}
