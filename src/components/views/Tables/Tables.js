import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const demoContent = [

  {id: 1,
    time: '12:00-12.30',
    table1: ['booked', '11111122222'],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 2,
    time: '12:30-13.00',
    table1: ['booked', '2222222'],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 3,
    time: '13:00-13.30',
    table1: ['booked', '123456'],
    table2: ['free', ''],
    table3: ['event', '234567'],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 4,
    time: '13:30-14.00',
    table1: ['booked', '123456'],
    table2: ['free', ''],
    table3: ['event', '234567'],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 5,
    time: '14:00-14.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', '234567'],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 6,
    time: '14:30-15.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', '234568'],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 7,
    time: '15:00-15.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', '234567'],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 8,
    time: '16:00-16.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', '234567'],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 9,
    time: '16:30-17.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 10,
    time: '17:00-17.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 11,
    time: '17:30-18.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 12,
    time: '18:00-18.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 13,
    time: '18:30-19.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 14,
    time: '19:00-19.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

  {id: 15,
    time: '19:30-20.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
    table4: ['free', ''],
    table5: ['free', ''],
    table6: ['free', ''],
  },

];

const renderActions = ([status, content]) => {
  switch (status) {
    case 'booked':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/tables/booking/${content}`}>{content}</Button>
        </>
      );
    case 'event':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/tables/events/${content}`}>{content}</Button>
        </>
      );
    default:
      return null;
  }
};

const Tables = () => (

  <Paper className={styles.component}>

    <Typography variant="h5">TABLES SCHEDULE</Typography>

    <div className={styles.calendar}>
      <form noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-09-10"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>

    <div className={styles.buttonContainer}>
      <Button className={styles.button} color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/tables/booking/new`}>Book Table</Button>
      <Button className={styles.button} color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell width={200}>HOUR</TableCell>
          <TableCell width={200}>Table 1</TableCell>
          <TableCell width={200}>Table 2</TableCell>
          <TableCell width={200}>Table 3</TableCell>
          <TableCell width={200}>Table 4</TableCell>
          <TableCell width={200}>Table 5</TableCell>
          <TableCell width={200}>Table 6</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
            <TableCell>
              {renderActions(row.table1)}
            </TableCell>
            <TableCell>
              {renderActions(row.table2)}
            </TableCell>
            <TableCell>
              {renderActions(row.table3)}
            </TableCell>
            <TableCell>
              {renderActions(row.table4)}
            </TableCell>
            <TableCell>
              {renderActions(row.table5)}
            </TableCell>
            <TableCell>
              {renderActions(row.table6)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  </Paper>

);

export default Tables;