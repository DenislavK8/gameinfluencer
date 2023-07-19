import { useState } from "react";
import { Campaign } from "../interfaces/campaign";
import styles from "./Form.module.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import Input from "@mui/base/Input";
import TextField from "@mui/material/TextField";
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

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
          <TextField
            className={styles.inputText}
            type="text"
            inputProps={{ maxLength: 20 }}
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
          <TextField
            className={styles.textarea}
            name="description"
            inputProps={{ maxLength: 200 }}
            onChange={(event) =>
              setCampaign({ ...campaign, description: event.target.value })
            }
            value={campaign.description}
          ></TextField>
          <br />
        </div>
        <div>
          <label>Choose the game:</label>
          <div>
            {games.map((game) => (
              <label key={game}>
                <div>
                  <Radio
                    name="game"
                    value={game}
                    size="small"
                    color="success"
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
              <Radio
                onClick={() => setVisible(true)}
                name="game"
                size="small"
                color="success"
              />
              <label>Other</label>
              <div>
                <Input
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
          <Input
            type="date"
            id="start"
            onChange={(event) =>
              setCampaign({ ...campaign, start: event.target.value })
            }
            value={campaign.start}
          />
          <br />
          <label>End date:</label>
          <Input
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
          <TextField
            className={styles.inputText}
            type="number"
            label="Budget (up to 10,000 dollars)"
            variant="outlined"
            inputProps={{ min: 0, max: 10000, maxLength: 5 }}
            value={campaign.budget}
            onChange={(event) =>
              setCampaign({ ...campaign, budget: event.target.value })
            }
          />
          <br />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Pay with Crypto currency"
          />
        </div>
        <div>
          <FormControl className={styles.select}>
            <InputLabel>Select the campaign language:</InputLabel>
            <Select
              value={campaign.language}
              onChange={(event) =>
                setCampaign({ ...campaign, language: event.target.value })
              }
            >
              {languages.map((language) => (
                <MenuItem
                  className={styles.select}
                  key={language}
                  value={language}
                >
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <p />
        <div>
          <Button
            className={styles.submitButton}
            variant="contained"
            color="success"
            size="large"
            type="submit"
            disableElevation
          >
            Submit
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
