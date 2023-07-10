import React from "react";

const Table = ({ campaigns }) => {
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
        {campaigns.map((c, index) => (
          <tr className="tr" key={index}>
            <td className="td">{c.name}</td>
            <td className="td">{c.game}</td>
            <td className="td">{c.start}</td>
            <td className="td">{c.budget}</td>
            <td className="td">{c.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
