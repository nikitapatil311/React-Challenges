import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      name: "🥝 KIWI",
      id: 1,
      color: "red",
    },
    {
      name: "🍎 APPLE",
      id: 2,
      color: "red",
    },
    {
      name: "🍊 Orange",
      id: 3,
      color: "green",
    },
    {
      name: "🍉 Watermelon",
      id: 4,
      color: "green",
    },
    {
      name: "🍒 Cherry",
      id: 5,
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
