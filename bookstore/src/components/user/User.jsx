import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { FormControl, OutlinedInput } from '@mui/material';
import Search from "../Search";
import EditUser from './EditUser';

const User = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([])
  const [search, setSearch] = useState({});

  const getUserList = async () => {
    const url = "https://book-e-sell-node-api.vercel.app/api/user/all/"
    let res = await fetch(url);
    let parsedData = await res.json();
    setUser(parsedData.result)
  }

  const deleteUser = async (userid) => {
    try {
      await axios.delete(`https://book-e-sell-node-api.vercel.app/api/user?id=${userid}`);
      getUserList();
      toast.success('User Deleted Succesfully..!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    catch (err) {
      toast.error('error-user', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'firstName', headerName: 'FirstName', width: 200, renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.firstName}
          </div>
        )
      }
    },
    {
      field: 'lastName', headerName: 'LastName', width: 200, renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.lastName}
          </div>
        )
      }
    },
    {
      field: 'email', headerName: 'Email', width: 400, renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.email}
          </div>
        )
      }
    },
    {
      field: 'role', headerName: 'Role', width: 150, renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.role}
          </div>
        )
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/edit-user/" + params.row.id} element={<EditUser />}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined className="userListDelete" onClick={() => deleteUser(params.row.id)} />
          </>
        )
      }
    }
  ];
  return (
    <>
      <Search />
      <div className='m-auto my-3 d-flex align-items-center flex-row-reverse'>

        <div className='content-search'>
          <FormControl sx={{ width: '35ch' }} >

            <OutlinedInput placeholder="Search..." onChange={(e) => setSearch(e.target.value)}
              style={{
                height: '40px',
                padding: 3,
                fontWeight: 'bolder'
              }}
            />
          </FormControl>
        </div>
      </div>

      <div className='userList'>
        <DataGrid rows={user} pageSizeOptions={[5, 8, 10, 25, 100]} disableSelectionOnClick columns={columns} initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }} checkboxSelection />
      </div>
    </>
  )
}

export default User