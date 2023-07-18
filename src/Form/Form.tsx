import { useState } from "react";
import { Campaign } from "../interfaces/campaign";
import styles from "./Form.module.css";

interface FormProps {
  games: string[];
  languages: string[];
  onFormSubmit: (campaign: Campaign) => void;
}

export default function Form({ onFormSubmit, games, languages }: FormProps) {
  const [visible, setVisible] = useState(false);
  const [campaign, setCampaign] = useState<Campaign>({
    name: " ",
    description: "",
    game: "",
    start: "",
    end: "",
    budget: "",
    language: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFormSubmit(campaign);
    setCampaign({
      name: "",
      description: "",
      game: "",
      start: "",
      end: "",
      budget: "",
      language: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Campaign</legend>
        <div>
          <label>Name:</label>
          <br />
          <input
            className={styles.inputText}
            type="text"
            maxLength={20}
            onChange={(event) =>
              setCampaign({ ...campaign, name: event.target.value })
            }
            value={campaign.name}
          />
          <br />
        </div>
        <div>
          <label>Description:</label>
          <br />
          <textarea
            className={styles.textarea}
            name="description"
            rows={10}
            cols={37}
            maxLength={200}
            onChange={(event) =>
              setCampaign({ ...campaign, description: event.target.value })
            }
            value={campaign.description}
          ></textarea>
          <br />
        </div>
        <div>
          <label>Choose the game:</label>
          <div>
            {games.map((game) => (
              <label key={game}>
                <div>
                  <input
                    type="radio"
                    name="game"
                    value={game}
                    onChange={() => {
                      setVisible(false);
                      setCampaign({ ...campaign, game });
                    }}
                    checked={campaign.game === game}
                  />
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
                  className={visible ? styles.inputText : styles.hiddenInput}
                  placeholder="Other game"
                  onChange={(event) =>
                    setCampaign({ ...campaign, game: event.target.value })
                  }
                  value={campaign.game}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label>Start date:</label>
          <input
            type="date"
            id="start"
            onChange={(event) =>
              setCampaign({ ...campaign, start: event.target.value })
            }
            value={campaign.start}
          />
          <br />
          <label>End date:</label>
          <input
            type="date"
            id="end"
            onChange={(event) =>
              setCampaign({ ...campaign, end: event.target.value })
            }
            value={campaign.end}
          />
        </div>
        <div>
          <label>Campaign budget:</label>
          <br />
          <input
            className={styles.inputText}
            type="number"
            min={0}
            max={10000}
            maxLength={5}
            placeholder="up to 10 000 dollars"
            onChange={(event) =>
              setCampaign({ ...campaign, budget: event.target.value })
            }
            value={campaign.budget}
          />
          <br />
        </div>
        <div>
          <input type="checkbox" />
          <label>Pay with Crypto currency</label>
        </div>
        <div>
          <p>Select the campaign language:</p>
          <div>
            <select
              className={styles.select}
              onChange={(event) =>
                setCampaign({ ...campaign, language: event.target.value })
              }
              value={campaign.language}
            >
              {languages.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
        <p />
        <div>
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}
