import React, { useEffect, useState } from 'react'
import "./bookList.css"
import Spinner from '../Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const BookList = (props) => {

    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [count, setCount] = useState(0)

    const getListBook = async () => {

        // props.setProgress(10);
        const url = "https://book-e-sell-node-api.vercel.app/api/book/all/"
        setPage(page + 2)
        let data = await fetch(url);
        setLoading(true);

        // props.setProgress(40);
        setLoading(false)
        let parsedData = await data.json();

        // props.setProgress(70);
        setBook(parsedData.result)
        setTotalResults(parsedData.totalResults)

        // props.setProgress(100);
    }

    useEffect(() => {
        getListBook();
    }, [])

    // const handlePrevClick = async () => {
    //     // Page will be decrement by 1 if you click on previous button
    //     setPage(page - 1)
    //     getListBook();
    // }

    // const handleNextClick = async () => {
    //     // Page will be increment by 1 if you click on next button
    //     setPage(page + 1)
    //     getListBook();
    // }

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

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={book.length}
                next={getListBook}
                hasMore={book.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container-main-1'>
                    <div className='row main'>
                        {book.map((element) => {
                            {/* var count = 0; */}
                            {/* console.log(count) */}
                            return <div className="main-card" key={element.id}>

                                <div className='img-div'>
                                    <img src={element.base64image} className='book-img' alt="book-img" />
                                </div>
                                <div className='text-content'>
                                    <h3 className='h2-tag'>
                                        {element.name}
                                    </h3>
                                    <h5 className='h5-tag'>
                                        {element.category}
                                    </h5>
                                    <div className='desc'>
                                        {element.description}
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
                        })}
                    </div>
                </div>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-sm btn-danger" onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-sm btn-danger" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
            </InfiniteScroll>
        </>
    )
}

export default BookList