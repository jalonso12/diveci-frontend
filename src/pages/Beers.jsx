import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Beers = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://192.168.0.110:3001/restaurant/beer')
        .then((res) => res.json())
        .then((el) => {
          setData(el.data);
          setLoading(false);
        });
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Beer</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Brewery</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Vol %</TableCell>
              <TableCell align="right">IBU</TableCell>
              <TableCell align="right">mL</TableCell>
              <TableCell align="right">$ Bottle</TableCell>
              <TableCell align="right">Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow key='0'>
                <TableCell>
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              data.map((el) => (
                <TableRow key={el.idTag}>
                  <TableCell component="th" scope="row">
                    {el.name}
                  </TableCell>
                  <TableCell align="right">{el.idTag}</TableCell>
                  <TableCell align="right">{el.brewery}</TableCell>
                  <TableCell align="right">{el.type}</TableCell>
                  <TableCell align="right">{el.vol}</TableCell>
                  <TableCell align="right">{el.ibu}</TableCell>
                  <TableCell align="right">{el.quantity}</TableCell>
                  <TableCell align="right">{el.priceBottle}</TableCell>
                  <TableCell align="right">{el.stock}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Beers;
