import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const HeroesList = (props) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name/Secret Identity</TableCell>
            <TableCell align='right'>Powers</TableCell>
            <TableCell align='right'>No. of Heroes(0 to 10)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allHeroes.map((hero) => (
            <TableRow key={hero.age}>
              <TableCell component='th' scope='row'>
                {hero.name}/{hero.secretIdentity}
              </TableCell>
              <TableCell align='right'>
                {hero.powers.map((power) => (
                  <p>{power}</p>
                ))}
              </TableCell>
              <TableCell align='right'>
                <input
                  id='noOfHeroes'
                  min='0'
                  max='10'
                  name={hero.name}
                  type='number'
                  style={{ width: "3em" }}
                  onChange={props.handleNumberOfHeroes}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HeroesList;
