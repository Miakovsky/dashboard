import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (location.pathname == '/servers') {
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          
          <DialogTitle>Edit item</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Satellite server
            </DialogContentText>
            Server name
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Coordinates
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Hashcode
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Status
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
  else if (location.pathname == '/transformers') {
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          
          <DialogTitle>Edit item</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Transformer
            </DialogContentText>
            Name
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Coordinates
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Status
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
  else if (location.pathname == '/signals') {
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          
          <DialogTitle>Edit item</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Signal
            </DialogContentText>
            Name
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Date
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Type
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Level
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
  else if (location.pathname == '/tasks') {
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          
          <DialogTitle>Edit item</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Task
            </DialogContentText>
            Sender
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Date
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Drives
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Level
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
            Status
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth='200px'/>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

