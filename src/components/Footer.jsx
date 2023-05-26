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
                    <img src={`${process.env.REACT_APP_LOGO}`} alt="logo" style={{
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