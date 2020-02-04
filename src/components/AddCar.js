import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const AddCar = (props) => {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({brand: '', model: '', year: '', color: '', price: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  // Save car and close modal form
  const handleSave = () => {
    props.addCar(car);
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" colors="primary" style={{margin:10}} onClick={handleClickOpen}>
        New Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New car</DialogTitle>
          <DialogContent>
            <input type="text" placeholder="Brand" name="brand" 
              value={car.brand} onChange={handleChange}/><br/> 
            <input type="text" placeholder="Model" name="model" 
              value={car.model} onChange={handleChange}/><br/>
            <input type="text" placeholder="Color" name="color" 
              value={car.color} onChange={handleChange}/><br/>
            <input type="text" placeholder="Year" name="year" 
              value={car.year} onChange={handleChange}/><br/>
            <input type="text" placeholder="Price" name="price" 
              value={car.price} onChange={handleChange}/><br/>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>      
    </div>
  );
};

export default AddCar;