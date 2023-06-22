import { useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";
import { useEffect } from "react";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const id = setInterval(getISSCoords, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  async function getISSCoords() {
    const response = await fetch(URL);

    const coords = await response.json();
    setCoords(coords);
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
