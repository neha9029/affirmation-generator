import { useState } from "react";
import axios from "axios";
export default function App() {
  return (
    <div>
      <Header />
      <Mood />
    </div>
  );
}

function Header() {
  return (
    <header className="app-header">
      <h4 className="title">Affirmation Generator</h4>
      <p className="subtitle">Find the perfect words for your mood!</p>
    </header>
  );
}

function Mood() {
  const initialMood = "Select your mood";
  const [mood, setMood] = useState(initialMood);
  const [affirmation, setAffirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  const fetchAffirmation = async (mood) => {
    setLoading(true);
    setAffirmation("");
    try {
      const response = await axios.post(`${API_URL}/generateAffirmation`, {
        mood,
      });

      setAffirmation(response.data.message);
    } catch (error) {
      setAffirmation("Failed to fetch affirmation");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main-content">
      <div className="mood-container">
        <label>How are you feeling:</label>
        <select
          className="mood-dropdown"
          placeholder="Select your mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="happy">Happy</option>
          <option value="stressed">Stressed</option>
          <option value="anxious">Anxious</option>
          <option value="tired">Tired</option>
          <option value="motivated">Motivated</option>
        </select>
        <button className="generate-btn" onClick={() => fetchAffirmation(mood)}>
          Generate Affirmation
        </button>
      </div>
      {loading ? (
        <p className="loading-text">Loading ...</p>
      ) : (
        affirmation && <p className="affirmation">{affirmation}</p>
      )}
    </div>
  );
}
