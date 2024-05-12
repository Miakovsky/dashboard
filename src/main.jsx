import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ServerTable from './routes/materials/server_table'
import TrTable from './routes/materials/tr_table';
import SignalTable from './routes/materials/signals_table';
import TaskTable from './routes/materials/tasks_table';
import TextField from '@mui/material/TextField'
import HomePage from './routes/materials/home_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
   ,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/servers",
        element: <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth='200px'/>
            <ServerTable />
        </div>,
      },
      {
        path: "/transformers",
        element: <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth='200px'/>
            <TrTable />
        </div>,
      },
      {
        path: "/signals",
        element: <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth='200px'/>
            <SignalTable />
        </div>,
      },
      {
        path: "/tasks",
        element: <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth='200px'/>
            <TaskTable />
        </div>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
