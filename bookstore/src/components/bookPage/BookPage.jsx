import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import "./bookPage.css"
import { DeleteOutlineOutlined } from '@mui/icons-material';

const getLocalItems = () => {
    let bookList = localStorage.getItem('books')
    console.log(bookList);
    if (bookList) {
        return JSON.parse(localStorage.getItem('books'));
    }
    else {
        return [];
    }
}

const BookPage = () => {
    const [book, setBook] = useState([])

    const [items, setItems] = useState(getLocalItems());

    const getListBook = async () => {
        const url = "https://book-e-sell-node-api.vercel.app/api/book/all/"
        let res = await fetch(url);
        let parsedData = await res.json();
        setBook(parsedData.result)
    }

    useEffect(() => {
        getListBook();
        localStorage.setItem('books', JSON.stringify(items))
    }, [items])

    const handleDelete = async (id) => {

        // const url = "https://book-e-sell-node-api.vercel.app/api/book/id"
        // let res = await fetch(url);
        // let parsedData = await res.json();
        // setBook(parsedData.result)

        setBook(book.filter(item => item.id !== id));

        // const deleteBook = item.filter((elem) => {
        //     return id !== elem.id;
        // });
        // setBook(deleteBook)
    }

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
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <>
            <div className='userList'>
                <DataGrid rows={book} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
            </div>
        </>
    )
}

export default BookPage