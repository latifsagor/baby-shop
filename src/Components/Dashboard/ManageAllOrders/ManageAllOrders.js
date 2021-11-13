import { Button, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const ManageAllOrders = () => {
  const { AllContext } = useAuth()
  const { user, isLoading } = AllContext
  const [manageOrders, setManageOrders] = useState([])

  useEffect(() => {
    fetch(
      `https://infinite-coast-95375.herokuapp.com/manageOrders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setManageOrders(data))
  }, [user?.email])

  const handleAddToDelete = (id) => {
    // console.log(id)
    fetch(`https://infinite-coast-95375.herokuapp.com/customerInfo/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Deleted Successfully')
          const remaining = manageOrders.filter(
            (manageOrder) => manageOrder._id !== id
          )
          setManageOrders(remaining)
        } else {
          alert('not deleted')
        }
      })
  }
  return (
    <div>
      <p>{isLoading && <CircularProgress color="secondary" />}</p>
      <h2>Totals: {manageOrders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Manage All Orders table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Cancel Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {manageOrders.map((manageOrder) => (
              <TableRow
                key={manageOrder._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {manageOrder.customerName}
                </TableCell>
                <TableCell align="right">{manageOrder.email}</TableCell>
                <TableCell align="right">{manageOrder.phone}</TableCell>
                <TableCell align="right">{manageOrder.address}</TableCell>
                <TableCell align="right">{manageOrder.city}</TableCell>
                <TableCell align="right">
                  <Button variant="contained">Pending</Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => handleAddToDelete(manageOrder?._id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ManageAllOrders
