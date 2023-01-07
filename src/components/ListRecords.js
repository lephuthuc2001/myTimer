import React from "react";
import { formatTime } from "../formatTime";
import listStyle from "./ListRecords.module.css";
function ListRecords({ records }) {
  const recordsList = records.reverse();
  return (
    <ul className={listStyle.list}>
      {recordsList.map((record) => {
        return (
          <li
            key={Math.random().toString(36).substring(6)}
            className={listStyle.item}
          >
            <div className={listStyle.info}>
              <div>{record.count}</div>
              <div>{formatTime(record.splitTime)}</div>
            </div>
            <div className={listStyle.interval}>
              {`+${formatTime(record.interval)}`}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ListRecords;
