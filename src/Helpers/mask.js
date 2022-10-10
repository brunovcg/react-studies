function mask(value, pattern) {
  let i = 0;
  const stringify = value.toString();

  return pattern.replace(/#/g, () => stringify[i++] || "");
}

console.log(mask(81988335138, "(##) #.####-####"));
console.log(mask("06892016480", "###.###.###-##"));
