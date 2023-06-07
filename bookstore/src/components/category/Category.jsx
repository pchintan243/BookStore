import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Button, FormControl, OutlinedInput, Stack } from '@mui/material';

const Category = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState([])
    const [search, setSearch] = useState({});
    const [pageSize, setPageSize] = useState(1)

    const getAllCategory = async () => {
        const url = "https://book-e-sell-node-api.vercel.app/api/category/all/"
        let res = await fetch(url);
        let parsedData = await res.json();
        setPageSize(parsedData.result.length)
        console.log(pageSize);
    }

    const getCategory = async () => {
        await getAllCategory();
        const url = `https://book-e-sell-node-api.vercel.app/api/category?pageSize=${pageSize}&pageIndex=1&keyword=${search}`
        let res = await fetch(url);
        let parsedData = await res.json();
        setCategory(parsedData.result.items)
    }

    const deleteCategory = async (categoryid) => {
        try {
            await axios.delete(`https://book-e-sell-node-api.vercel.app/api/category?id=${categoryid}`);
            getCategory();
            toast.success('Category Deleted Succesfully..!!', {
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
            toast.error('Error getting while category delete..!!', {
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
        getAllCategory();
        getCategory();
    }, [search]);


    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        {
            field: 'Category Name', headerName: 'Category Name', width: 900, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/edit-book/:id/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className="userListDelete" onClick={() => deleteCategory(params.row.id)} />
                    </>
                )
            }
        }
    ];


    return (
        <>
            <div className='m-auto my-3 d-flex align-items-center flex-row-reverse'>

                <Stack direction="row" spacing={2} style={{
                    borderRadius: 4,
                    margin: '3px 10px',
                    height: 40
                }}>
                    <Button variant="outlined" onClick={() => navigate("/add-category")} style={{ color: 'white', backgroundColor: 'rgb(255 0 11)', margin: '0px 82px 0 0' }}>
                        ADD
                    </Button>
                </Stack>
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
                <DataGrid rows={category} pageSizeOptions={[2, 5, 8, 10, 25]} disableSelectionOnClick columns={columns} initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5, page: 0 },
                    },
                }} checkboxSelection />
            </div>
        </>
    )
}

export default Category