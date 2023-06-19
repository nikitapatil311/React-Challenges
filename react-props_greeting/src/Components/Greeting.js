export function Greeting({ name }) {
  const girls = ["Tina", "Lina", "Pinky"];
  return <h1>Hello, {girls.includes(name) ? "girls" : name}!</h1>;
}
