import React from "react";
import "./Table.css";
import { Campaign } from "./interfaces/campaign";

interface TableProps {
  campaigns: Campaign[];
}

const Table = ({ campaigns }: TableProps) => {
  return (
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
        {campaigns.map((campaign, index) => (
          <tr className="tr" key={index}>
            <td className="td">{campaign.name}</td>
            <td className="td">{campaign.game}</td>
            <td className="td">{campaign.start}</td>
            <td className="td">{campaign.budget}</td>
            <td className="td">{campaign.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
