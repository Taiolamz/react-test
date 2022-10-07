import React, { useState, useEffect } from "react";
import { TableHead } from "./tableHead";
import lists from '../Components/data/data.json'


const AnimalList = () => {

  return (
    <div>
      <TableHead>
      {lists.map((list, idx) => {
          return (
            <tbody key={idx}>
              <tr>
                <th scope="row">{list.id}</th>
                <td>{list.breed}</td>
                <td>{list.name}</td>
                <td>{list.description}</td>
                <td>{list.age}</td>
              </tr>
            </tbody>
          );
        })}
        <h3>Prev..</h3>
        <h3>Next..</h3>
      </TableHead>
      {/* <TableBody /> */}
    </div>
  );
};

export default AnimalList;
