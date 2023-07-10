import { useState } from "react";
import "./App.css";
import Table from "./Table";
import Form from "./Form";

const games = [
  "League of Legends",
  "Dota 2",
  "Minecraft",
  "Fortnite",
  "Apex Legends",
];

const languages = ["English", "German", "Spanish", "Japanese"];
function App() {
  const [campaigns, setCampaigns] = useState([]);

  const handleFormSubmit = (campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  return (
    <div className="App">
      <body>
        <Form
          onFormSubmit={handleFormSubmit}
          games={games}
          languages={languages}
        />
        <Table campaigns={campaigns} />
      </body>
    </div>
  );
}

export default App;
