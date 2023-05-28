import React from 'react'

const Footer = () => {
    return (
        <>
            <div style={{
                // display: 'flex'
            }}>
                <footer style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    margin: '30px auto',
                    height: '200px',
                    backgroundColor: 'rgb(220 220 220)'
                }}>
                    <img src='https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg' alt="logo" style={{
                        width: '18%',
                        margin: '20px'
                    }} />
                    <p>© 2015 Tatvasoft.com. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}

export default Footer