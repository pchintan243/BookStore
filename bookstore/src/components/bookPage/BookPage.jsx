import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom'
import "./bookPage.css"
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';

const BookPage = () => {

    const navigate = useNavigate();
    const [book, setBook] = useState([])

    const getListBook = async () => {
        const url = "https://book-e-sell-node-api.vercel.app/api/book/all/"
        let res = await fetch(url);
        let parsedData = await res.json();
        setBook(parsedData.result)
    }

    const deleteItem = async (id) => {
        // let updateList = book.filter(item => item.id !== id)
        // setBook(updateList);
        // localStorage.getItem('bookList')
        setBook(book.filter(item => item.id !== id));
    }

    useEffect(() => {
        getListBook();
        localStorage.setItem('bookList', getListBook())
    }, [book]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'bookname', headerName: 'BookName', width: 300, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.base64image} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'category', headerName: 'Category', width: 300, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.category}
                    </div>
                )
            }
        },
        {
            field: 'price', headerName: 'Price', width: 250, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        ${params.row.price}
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
                        <Link to={"/edit-book/:id/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className="userListDelete" onClick={() => deleteItem(params.row.id)} />
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
                    <Button variant="outlined" onClick={() => navigate("/add-book")} style={{ color: 'white', backgroundColor: 'rgb(255 0 11)', margin: '0px 82px 0 0' }}>
                        ADD
                    </Button>
                </Stack>
                <h4 className='m-auto mx-0'>ADD BOOK</h4>
            </div>

            <div className='userList'>
                <DataGrid rows={book} pageSizeOptions={[2, 5, 8, 10, 25]} disableSelectionOnClick columns={columns} initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5, page: 0 },
                    },
                }} checkboxSelection />
            </div>
        </>
    )
}

export default BookPage