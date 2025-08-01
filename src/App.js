import { useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <Mood />
    </div>
  );
}

function Header() {
  return <header>Affirmation Generator</header>;
}

function Mood() {
  const [mood, setMood] = useState("");

  return (
    <div className="mood-container">
      <label>Select your mood:</label>
      <select className="mood-dropdown" value="mood" onChange={(e) => setMood(e.target.value)}>
        <option value="happy">Happy</option>
        <option value="stressed">Stressed</option>
        <option value="anxious">Anxious</option>
        <option value="tired">Tired</option>
        <option value="motivated">Motivated</option>
      </select>
      <button className="generate-btn">Generate Affirmation</button>
    </div>
  );
}
