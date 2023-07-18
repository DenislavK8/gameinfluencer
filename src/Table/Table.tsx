import React from "react";
import { Campaign } from "../interfaces/campaign";
import styles from "./Table.module.css";

interface TableProps {
  campaigns: Campaign[];
}

const Table = ({ campaigns }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.td}>Campaign name</th>
          <th className={styles.td}>Campaign Game</th>
          <th className={styles.td}>Campaign start date</th>
          <th className={styles.td}>Campaign budget</th>
          <th className={styles.td}>Campaign language</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign, index) => (
          <tr className={styles.tr} key={index}>
            <td className={styles.td}>{campaign.name}</td>
            <td className={styles.td}>{campaign.game}</td>
            <td className={styles.td}>{campaign.start}</td>
            <td className={styles.td}>{campaign.budget}</td>
            <td className={styles.td}>{campaign.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
