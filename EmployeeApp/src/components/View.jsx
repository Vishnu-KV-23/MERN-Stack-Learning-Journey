import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [emp, setEmp] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3700/view")
      .then((res) => {
        console.log(res);
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delValue = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3700/remove/${id}`)
      .then((res) => {
        alert(res.data.message);
        window.location.reload(); // Reload the page after deletion (consider a more elegant solution)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateValue = (val) => {
    console.log("Update clicked:", val);
    navigate("/a", { state: { val } }); // Navigate to "/a" route with state containing the ID
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emp.map((val) => (
              <TableRow key={val._id}>
                <TableCell>{val.Name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.Dept}</TableCell>
                <TableCell>{val.Sal}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => delValue(val._id)}>Delete</Button>
                  &nbsp;
                  <Button variant="contained" onClick={() => updateValue(val)}>Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;
