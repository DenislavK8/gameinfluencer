import { useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [campaign, setCampaign] = useState({
    name: "",
    description: "",
    game: "",
    start: "",
    end: "",
    budget: "",
    language: "",
  });
  const games = [
    "League of Legends",
    "Dota 2",
    "Minecraft",
    "Fortnite",
    "Apex Legends",
  ];
  const languages = ["English", "German", "Spanish", "Japanese"];

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCampaign = {
      name: campaign.name,
      game: campaign.game,
      startDate: campaign.start,
      budget: campaign.budget,
      language: campaign.language,
    };

    setCampaigns([campaign, newCampaign]);

    setCampaign({
      name: "",
      description: "",
      game: "",
      start: "",
      end: "",
      budget: "",
      language: "",
    });
    setSelected(false);
  };

  return (
    <div className="App">
      <body>
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Campaign</legend>
            <div>
              <label>Name:</label>
              <br></br>
              <input
                className="inputText"
                type="text"
                maxlength="20"
                onChange={(event) => setCampaign({ name: event.target.value })}
                value={campaign.name}
              />
              <br></br>
            </div>
            <div>
              <label>Description:</label>
              <br></br>
              <textarea
                className="textarea"
                name="description"
                rows="10"
                cols="37"
                maxlength="200"
                onChange={(event) =>
                  setCampaign({ description: event.target.value })
                }
                value={campaign.description}
              ></textarea>
              <br></br>
            </div>
            <div>
              <label>Choose the game:</label>
              <div>
                {games.map((game) => (
                  <label>
                    <div>
                      {
                        <input
                          type="radio"
                          name="game"
                          onClick={() => {
                            setVisible(false);
                            setCampaign({ game: game });
                          }}
                          checked={selected}
                        />
                      }
                      {game}
                    </div>
                  </label>
                ))}
                <div>
                  <input
                    type="radio"
                    onClick={() => setVisible(true)}
                    name="game"
                  />
                  <label>Other</label>
                  <div>
                    <input
                      className={visible ? "inputText" : "hiddenInput"}
                      placeholder="Other game"
                      onChange={(event) =>
                        setCampaign({ game: event.target.value })
                      }
                      value={campaign.game}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label>Start date: </label>
              <input
                type="date"
                id="start"
                onChange={(event) => setCampaign({ start: event.target.value })}
                value={campaign.start}
              />
              <br />
              <label>End date: </label>
              <input
                type="date"
                id="end"
                onChange={(event) => setCampaign({ end: event.target.value })}
                value={campaign.end}
              />
            </div>
            <div>
              <label>Campaign budget:</label>
              <br></br>
              <input
                className="inputText"
                type="number"
                min="0"
                max="10000"
                maxlength="5"
                placeholder="up to 10 000 dollars"
                onChange={(event) =>
                  setCampaign({ budget: event.target.value })
                }
                value={campaign.budget}
              />
              <br></br>
            </div>
            <div>
              <input type="checkbox" />
              <label>Pay with Crypto currency</label>
            </div>
            <div>
              <p>Select the campaign language:</p>
              <div>
                <select
                  className="select"
                  onChange={(event) =>
                    setCampaign({ language: event.target.value })
                  }
                  value={campaign.language}
                >
                  {languages.map((language) => (
                    <option>{language}</option>
                  ))}
                </select>
              </div>
            </div>
            <p />
            <div>
              <button className="submitButton" type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">Campaign name</th>
              <th className="th">Campaign Game</th>
              <th className="th">Campaign start date</th>
              <th className="th">Campaign budget</th>
              <th className="th">Campaign language</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr className="tr">
                <td className="td">{c.name}</td>
                <td className="td">{c.game}</td>
                <td className="td">{c.startDate}</td>
                <td className="td">{c.budget}</td>
                <td className="td">{c.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default App;
