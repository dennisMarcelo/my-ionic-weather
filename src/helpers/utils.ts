export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

export function convertFromKelvin(amount: number, unit: string) {
  switch(unit){
    case "celsius":
      return amount - 273.15;
    case "fahrenheit":
      return (amount - 273.15) * 1.8 + 32;
    default:
      return amount
  }
}
