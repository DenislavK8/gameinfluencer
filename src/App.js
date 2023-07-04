import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [start, setStart] = useState("");
  const [budget, setBudget] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  /*onValueChange(e) {
    this.setGame({
      selectedOption: e.target.value
    });
  }*/

  return (
    <div className={styles.App}>
      <body>
        <form className={styles.form}>
          <fieldset>
            <legend>Campaign</legend>
            <div>
              <label>Name:</label>
              <br></br>
              <input
                className={styles.inputText}
                type="text"
                maxlength="20"
                placeholder="Campaign Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
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
              ></textarea>
              <br></br>
            </div>
            <label>Choose the game:</label>
            <div>
              <input
                type="radio"
                name="game"
                onClick={() => setVisible(false)}
                value="League of Legends"
                /*checked={this.state.selectedOption === "League of Legends"}
                onChange={this.onValueChange}*/
              />
              <label>League of Legends</label>
            </div>
            <div>
              <input
                type="radio"
                name="game"
                onClick={() => setVisible(false)}
                value="Dota2"
                /*checked={this.state.selectedOption === "Dota2"}
                onChange={this.onValueChange}*/
              />
              <label>DOTA 2</label>
            </div>
            <div>
              <input
                type="radio"
                name="game"
                onClick={() => setVisible(false)}
                value="Minecraft"
                /*checked={this.state.selectedOption === "Minecraft"}
                onChange={this.onValueChange}*/
              />
              <label>Minecraft</label>
            </div>
            <div>
              <input
                type="radio"
                name="game"
                onClick={() => setVisible(false)}
                value="Fortnite"
                /*checked={this.state.selectedOption === "Fortnite"}
                onChange={this.onValueChange}*/
              />
              <label>Fortnite</label>
            </div>
            <div>
              <input
                type="radio"
                name="game"
                onClick={() => setVisible(false)}
                value="Apex Legends"
                /*checked={this.state.selectedOption === "Apex Legends"}
                onChange={this.onValueChange}*/
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
            </div>
            <div>
              <input
                className={visible ? styles.inputText : styles.hiddenInput}
                placeholder="Other game"
                onChange={(event) => setGame(event.target.value)}
                value={game}
              />
            </div>
            <div>
              <label>Start date: </label>
              <input type="date" id="start" />
              <br />
              <label>End date: </label>
              <input type="date" id="end" />
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
              />
              <br></br>
            </div>
            <div>
              <input type="checkbox" />
              <label>Pay with Crypto currency</label>
            </div>
            <div>
              <p>Select the campaign language:</p>
              <select className={styles.select}>
                <option>English</option>
                <option>German</option>
                <option>Spanish</option>
                <option>Japanese</option>
              </select>
            </div>
            <p />
            <div>
              <button
                className={styles.submitButton}
                onSubmit={handleSubmit}
                type="submit"
                value="submit"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>Campaign name</th>
            <th className={styles.th}>Campaign Game</th>
            <th className={styles.th}>Campaign start date</th>
            <th className={styles.th}>Campaign budget</th>
            <th className={styles.th}>Campaign language</th>
          </tr>
          <tr className={styles.tr}>
            <th className={styles.th}>{name}</th>
            <th className={styles.th}>{game}</th>
            <th className={styles.th}>01.06.2023</th>
            <th className={styles.th}>{budget}</th>
            <th className={styles.th}>English</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
