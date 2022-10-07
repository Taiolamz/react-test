import React from "react";
import { Table } from "reactstrap";

export const TableHead = ({children}) => {
  const tableHead = ["S/N", "Breed", "Pet Name", "Age", "Description"];

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>{tableHead[0]}</th>
            <th>{tableHead[1]}</th>
            <th>{tableHead[2]}</th>
            <th>{tableHead[3]}</th>
            <th>{tableHead[4]}</th>
          </tr>
        </thead>
        {children}
      </Table>
    </div>
  );
};
