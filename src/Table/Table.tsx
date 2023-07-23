import React from "react";
import { Campaign } from "../interfaces/campaign";
import styles from "./Table.module.css";
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface TableProps {
  campaigns: Campaign[];
}

const Table = ({ campaigns }: TableProps) => {
  return (
    <table className={styles.table}>
      <TableHead>
        <TableRow className={styles.tr}>
          <TableCell className={styles.td}>Campaign name</TableCell>
          <TableCell className={styles.td}>Campaign Game</TableCell>
          <TableCell className={styles.td}>Campaign start date</TableCell>
          <TableCell className={styles.td}>Campaign budget</TableCell>
          <TableCell className={styles.td}>Campaign language</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {campaigns.map((campaign, index) => (
          <TableRow className={styles.tr} key={index}>
            <TableCell className={styles.td}>{campaign.name}</TableCell>
            <TableCell className={styles.td}>{campaign.game}</TableCell>
            <TableCell className={styles.td}>{campaign.start}</TableCell>
            <TableCell className={styles.td}>{campaign.budget}</TableCell>
            <TableCell className={styles.td}>{campaign.language}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </table>
  );
};

export default Table;
