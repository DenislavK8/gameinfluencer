import { useState } from "react";
import Table from "./Table/Table";
import Form from "./Form/Form";
import { Campaign } from "./interfaces/campaign";

const games: string[] = [
  "League of Legends",
  "Dota 2",
  "Minecraft",
  "Fortnite",
  "Apex Legends",
];

const languages: string[] = ["English", "German", "Spanish", "Japanese"];

export default function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const handleFormSubmit = (campaign: Campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  return (
    <div className="App">
      <Form
        onFormSubmit={handleFormSubmit}
        games={games}
        languages={languages}
      />
      <Table campaigns={campaigns} />
    </div>
  );
}
