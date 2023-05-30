import React, { useEffect, useState } from 'react'
import "./bookList.css"

const BookList = () => {

    const [book, setBook] = useState([])

    const getListBook = async () => {
        const url = "https://book-e-sell-node-api.vercel.app/api/book/all/"

        let data = await fetch(url);

        let parsedData = await data.json();

        setBook(parsedData.result)
    }

    useEffect(() => {
        getListBook();
    }, [])

    return (
        <>
            <div className="container">
                <h1 style={{
                    margin: '35px 0px 17px',
                    textAlign: 'center'
                }}>Book Listing</h1>
                <div style={{
                    height: '2px',
                    width: '10%',
                    margin: "10px auto 50px",
                    backgroundColor: 'red',
                }}></div>
            </div>

            <div className='container'>
                <div className='row main'>
                    {book.map((element) => (
                        <div className="col-md-3 main-card my-4" key={element.id}>

                            <div className='img-div'>
                                <img src={element.base64image} className='book-img' alt="book-img" />
                            </div>
                            <div>
                                <h2 className='h2-tag'>
                                    {element.name.slice(0, 20)}
                                </h2>
                                <h5 className='h5-tag'>
                                    {element.category}
                                </h5>
                                <div className='desc'>
                                    {element.description.slice(0, 80)}
                                </div>
                                <p className="price-p">
                                    <h5 className="price-h5">
                                        MRP &#8377; {element.price}
                                    </h5>
                                </p>
                                <button className="btn btn-danger col-12">
                                    <span
                                        className=""
                                    // onClick={() => addToCart(book)}
                                    >
                                        ADD TO CART
                                    </span>
                                    <span className=""></span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BookList