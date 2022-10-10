export const toBRL = (number) => {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};