import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', task: 'pizzaBecon carbonara', amount:'2', status: 'in progress', order: 123},
  {id: '2', task: 'pizzaCalzone', amount:'1', status: 'just ordered', order: 234},
  {id: '3', task: 'carbonara', amount:'1',status: 'done', order: 345},
  {id: '4', task: 'pizzaCapriciosa pizzaSalami', amount:'2',status: 'done', order: 456},
  {id: '5', task: 'breakfastEggs breakfastSandwitches', amount:'2',status: 'in progress', order: 567},
  {id: '6', task: 'grilledPrawns grilledSquid grilledOctopus', amount:'3',status: 'just ordered', order: 678},
];

const renderActions = status => {
  switch (status) {
    case 'just ordered':
      return (
        <Button>in progress</Button>
      );
    case 'in progress':
      return (
        <Button>done</Button>
      );
    case 'done':
      return null;
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order ID</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.task}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.amount}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);


export default Kitchen;