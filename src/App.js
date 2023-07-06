import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [game, setGame] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [budget, setBudget] = useState("");
  const [language, setLanguage] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCampaign = {
      name: name,
      game: game,
      startDate: start,
      budget: budget,
      language: language,
    };

    setCampaigns([...campaigns, newCampaign]);

    setName("");
    setDescription("");
    setGame("");
    setStart("");
    setEnd("");
    setBudget("");
    setLanguage("");
  };

  return (
    <div className={styles.App}>
      <body>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Campaign</legend>
            <div>
              <label>Name:</label>
              <br></br>
              <input
                className={styles.inputText}
                type="text"
                maxlength="20"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
              <br></br>
            </div>
            <div>
              <label>Description:</label>
              <br></br>
              <textarea
                className={styles.textarea}
                name="description"
                rows="10"
                cols="37"
                maxlength="200"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
              ></textarea>
              <br></br>
            </div>
            <div>
              <label>Choose the game:</label>
              <div>
                <input
                  type="radio"
                  name="game"
                  onClick={() => {
                    setVisible(false);
                    setGame("League of Legends");
                  }}
                  value="League of Legends"
                />
                <label>League of Legends</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="game"
                  onClick={() => {
                    setVisible(false);
                    setGame("Dota2");
                  }}
                  value="Dota2"
                />
                <label>DOTA 2</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="game"
                  onClick={() => {
                    setVisible(false);
                    setGame("Minecraft");
                  }}
                  value="Minecraft"
                />
                <label>Minecraft</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="game"
                  onClick={() => {
                    setVisible(false);
                    setGame("Fortnite");
                  }}
                  value="Fortnite"
                />
                <label>Fortnite</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="game"
                  value="Apex Legends"
                  onClick={() => {
                    setVisible(false);
                    setGame("Apex Legends");
                  }}
                />
                <label>Apex Legends</label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={() => setVisible(true)}
                  name="game"
                />
                <label>Other</label>

                <input
                  className={visible ? styles.inputText : styles.hiddenInput}
                  placeholder="Other game"
                  onChange={(event) => setGame(event.target.value)}
                  value={game}
                />
              </div>
            </div>
            <div>
              <label>Start date: </label>
              <input
                type="date"
                id="start"
                onChange={(event) => setStart(event.target.value)}
                value={start}
                required
              />
              <br />
              <label>End date: </label>
              <input
                type="date"
                id="end"
                onChange={(event) => setEnd(event.target.value)}
                value={end}
              />
            </div>
            <div>
              <label>Campaign budget:</label>
              <br></br>
              <input
                className={styles.inputText}
                type="number"
                min="0"
                max="10000"
                maxlength="5"
                placeholder="up to 10 000 dollars"
                onChange={(event) => setBudget(event.target.value)}
                value={budget}
                required
              />
              <br></br>
            </div>
            <div>
              <input type="checkbox" />
              <label>Pay with Crypto currency</label>
            </div>
            <div>
              <p>Select the campaign language:</p>
              <select
                className={styles.select}
                onChange={(event) => setLanguage(event.target.value)}
                value={language}
              >
                <option>English</option>
                <option>German</option>
                <option>Spanish</option>
                <option>Japanese</option>
              </select>
            </div>
            <p />
            <div>
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Campaign name</th>
              <th className={styles.th}>Campaign Game</th>
              <th className={styles.th}>Campaign start date</th>
              <th className={styles.th}>Campaign budget</th>
              <th className={styles.th}>Campaign language</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index} className={styles.tr}>
                <td className={styles.td}>{campaign.name}</td>
                <td className={styles.td}>{campaign.game}</td>
                <td className={styles.td}>{campaign.startDate}</td>
                <td className={styles.td}>{campaign.budget}</td>
                <td className={styles.td}>{campaign.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default App;
