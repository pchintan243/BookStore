import React from 'react'
import Search from '../Search'
import "./cart.css"
import { Button } from '@mui/material'


const Cart = () => {
    return (
        <>
            <Search />
            <div className="container header-1">
                <h1
                    style={{
                        margin: '35px 0px 17px',
                        textAlign: 'center',
                        fontWeight: 700
                    }}
                >
                    Cart Page
                </h1>
                <div
                    style={{
                        height: '2px',
                        width: '27%',
                        margin: "10px auto 50px",
                        backgroundColor: 'red',
                    }}
                >
                </div>
                <div className='header-2'>
                    <h5>My Shopping Bag (0 Items)</h5>
                    <h5>Total price: 0</h5>
                </div>

                {/* card content */}
                <div className='card-content'>
                    <div className="img-tag">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYA0gMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD4QAAIBAgQDBAgEBQIHAQAAAAECAwARBBIhMQVBURMiYXEGMoGRobHB8CNi0eEUM0JS8XKyBxUkJUOSwhb/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAiEQEBAAICAgICAwAAAAAAAAAAAQIRITEDEkFRMmEEEyL/2gAMAwEAAhEDEQA/APRRTwK4BThVkXRTwK4KeBQZAV2lXQKAr4xbxHyrw7/iNh2THhuVe7zLdDXlf/EfAF07ULtei8wTt5SF1onw1LuMxso1Y9BVXsjfxva1E4YrBYF05ufH9qjipaKxTCR1uMsSCyL0HT960/AFLq0klwFNv2FZLCoWlsNhp7K3PB4SuGXTKuyr1oyrfji3MS7BQug0CrUj4VpERWu018qxoDcjp4kfTXlVmDDXOUxgyvtdhZQN/IDmfZUjOqxsRLli9WSYCzTflUcl8Pf0E9Ky/SFIlhW0348ij+XG1o0H5n5+Q08aUmJZx2RciLnHCOzT3bn20pWZoRlQRwk7A7eJ5n21CcsZszXPTnS02fE6jUR2PRNvebn41KJ2Itl0/M7frUJlUooygEaC+v3vTkzHYsPCnIEqvlDFlIFtSjMPkfu1OXHBYxHPhYJkAsBIgJ9/re8muoXEbL3rEg7+dRsCDqPhWtM9nRHAOzHCy4jASHTRs8beanX4tVDifDgqB8ZCsatoMZgxmiY/nTl7LHwNWUiXNm0AW5Nxp98q6mJmwrkxABWFnjNirDncdD01FGhvXTLY3hsmHKsQrRuLxyxtmRx4H6b1ReEnu628OVbTE8OjxsDycLXKx70uBuSrED1kHW3LcciaAHBlizXKxqbFiPVP9vn9+WbipMoFmE4eT8KUMBqHQnWppsOMavbxr+OgvIg/rH9w+tTSqSAuW1uX1rmHZsPMssZylTcGp6LKb5nYeI7i9q7R4wcFclnkaNm1KAnunptSp+qf9t+nowp4F64BTwK7XG6BTqQrooBAU8VwCnUgawuKyPpjgRPg5Ba+hrYUE9IIs+GfTkacF4eDmAR4mVyBaM7ePKpI0IQNfvNzq3xSEjFtDawzknx+/rTY0DPbdR9Pv41nTUEeD4V5GS22YZ/pXoGBhEUKyZiMuyhb38vpWY9FMH3jM/8AVpe3vrZySDCwvOoB7KyxAC3fOx9g18yKne1p0rY3EQ4SJ45HAVLfxBXmeUYN9h8TqdLVncbxly6yKqtdbQqD3VX28t/PfbcZxTHtiMa+CgRnwmC7zkuSXa2vPntryBpmCgmnMmJ4lJlwyglgNBfSy2BBAtbb8o50rG5dC2A4wI0afGu6Iwse73pQb2IJFhtpbewOguarJxkpOSUzgggR8z4mhuOxQmk7VrScwAdfM25m3h8hVefFMMMWxQEYJy9iuja7MfDQiiYj2GIeMBmAAaSbUhEF7AC58KtJxqP/AMrRqeeeXbwtWcef8BJcNiU7TtAf4eGPKQN83PmPfaqEPC5sU9sPYAGxRWLEeYF7e21a1pn2tehYXjGBeNlEkZtJlEnbFQdOhqwOJQEBge7lvc2ZfeK88bhckSlpFXujdiwHvIH2aqjEYnDuMkbKhINma6t5EaGjZR6c88aOFl7hYBlB2IOx8q526XCH2eFefQ4+eUE4hmBLM2UE5WvqRa+mvTrRnBThTadZgo01I7rf2k/f0pbUlauNZEYS4UsSNiDbUa/p8PCpeJwnH4Y4+FR20YtiYdgRf1wOWtr+NjQXDYyaUlDZUvoE2A5fZ+tGcHNLh8UsgylSe8GAswO9/Cxt5GlRz2APCb638D1FV5oSFuLWrT8RwCQYhkhuYWXtICTrY7r8CPMeNB8VDlUjcbg9ax6qY5bCgZALBj767Ts3h8aVJvb1YU8CmipBXW8wqcBXAKcKVJ0V2lXaGitQ/iseeBh4URqvi0zRkeFMq8S9IYey4nO3iSKH4cXFupt9/CtT6aYTs2aUD1mA93+azWAQyYiFADr9T+1LLhrHl6B6MwdlhszaALa5Hv8AgDTuPY7sMCwuE7AFmb87m17ddR/61bwC9hw4FrZGOq215Df31muKQTcXVI5EJMuK9W9hyA/3H4VNaBnDCJZVwuEUtK3ekMehOYd0Eje4Iv8A6iOtH8X6NxyLHAkxQAKz5SVu1t+e+ptfn7aK8GwyCcMuSJSSyplIYf2jc8yOXKrrZNWbQtdtDSNnIvRHD4cs7ZpTyzkWZiD56Cu//lcMAI5EBYnMWsDlJPIfSivEeLJg2yIc+QZiqNcE73N/vSh0/GcOuFBxOL7F5WK2jAZlOlzrzAIAHUmjez1rmqsvo9w+Brm2X+pWJKn/AFZfW8vV19tVMQnDuz7KOfEKF2CyZVAtyUaLsPcKF4zjGOOHadOGdjhZDljkxDElvIc/MUJjweJmLPI2S4sBzPjYXrXplembnhOxqHF4DCHIDIW3DrMyuOliCQNulWeGJhsUzGWIWPeZkQAkDqugb58731oFPwHssO8y/ikWu0bXI9mhqlhMLjE7+GlkQghldX0B5e2sZ45ztrHPDLpu4+E8OtcANCQDdeQJ0K35X668jrVtMEj4Q4cBcq2OXQCw3PXN89OgrN8C4xi4pzBxCDOrklJY1sM9tRb8wBGnOx5VrMHKjKk+HlV0BUqQLgqef31rO28sdK8WESAWHLbxFW47MLXJPT7+9amlT8RgGJUHukgag68qSErdQSARrbSjY7EAe34RfTtMI2ZT+UkA/HL7zQLiQUKxTVeXkdRRngj555MOfVmjZNfI2+NqB8QkBiFgGOUix6j9iKLSxmqBltTpXarnE6nSlU/ZbT2EU+mrTq7a804U4U0U5aQdroFcp1Mypk3qm/SnnaqGOxGRG15UhJvhivTlEODJ2Of9ayHA4O1xsJVk0tuwFH/S2SXFQEKDlz6n786DejaFscLi1qzllKpj4rO29cGPhYsUZ1W9lIO2Y8vZVTh+EKzYNmiBAUurs1tSeftAonhogyKCANbedwfGpjF+FA35SPjU1Nadw0YwmHkVjEh7MiwkGvx60A4vjmhjK4YFpHsqpcEi5G21GZ07oNZ/i2EGJDh1ViVsFPmOdZqmEZ3G4vFT8Rl4fhYWV3k780kik766KSPjW34R6L4HD4eLEYqFJZ1GYlxfVmYk2251noo0wLzyYSKFQjiVixW77kAW058vCthw3ikGLiSNXCyG91O5sb38rMDVMGfJjfXbBenGJvx2HDnKIMPEGCba/YoRjuLxcD4bDjI0XETytYK+wrWemmDOC4tguM9j2sCkLOmW+n+L1D6UzcM9J+GYRHwjJHCjAOir1FtAfCurnXDg43yD8B4vF6R8LnxH8P8Aw+Lwh72TVXGmmg+7VUWMxY6VAD2UiiSx5X3+VFOE4Th/CuES4fh8bRLJrPNLzH3/AIqvDllllxbWSJjaMMdlH2TU7LrlXx85cEjxQxywvbMCkkRtsytcfC9PWLGcFx0v8NG8uBKMrIov2QWRgD5ABQaHzyQYhwGk0eVYwynQblj42UcutdwXHu1xL/xjf9NN6yE94Z2LkezPb2VzWb6ehhLpuYZVnwcUg0zRIwIINxsPhTpUaKezgqQ+x86GRPLwyX+ClVXhAXsmCBbXFyptvar3/MJpJcrkSC+z3I+dK2JyWLPB5MvFsL4yp/uWs9xJ8sskTKWKTOthv5fCjvCm7bjeGZVVfxEZgosLBgT8Aay/EMWXLO27SOxIVb7Dw8aln0pjP9BBJudKVRltTXahur6e5LTqatO516teOcKeKYtPpAqdyrldpma+1BuId9wDte1GJTZaB46QB99axl0r4ZuhPEMAsuDlAXbUVm+B4bsuJuttjW3urxMNLMpFZrhimPjDtlBA5MPfepOitHF3dQCQCGq4iZo2S+qOfaCP2+NVIxYi+ota1W4iEZbm1+4T0I2PyoTyU5v5RObbYAX++VDZkecXluVGhUaXBoniBlkIIsp28uf1qsFCfr1pNY8BuKwIlMckwHZoMjAIAOot7PlTEwhsI1JjaOziQ3OUj1Gtz00PgR5UbjUXyst1OjDqv60nwwBVkJtujdNPvSqTk/bTO4iTiLLJBGziEkq0c1nXy1+FZ7F8GxKhmR3w6DVhFoCfbf4V6RHEiBAyZcosrDu2HQHp4GqfEMMk6WKooA1ATLf6Vq5ftni3mPLpuGski5ppZLkkZm0vXP8Al+IxDEO7LGouzP6qDqTy8tzyrdYjh8LLZES4/q7Qvbxsg+dD5MJHADu0hOmYXsdf6b77asfIGpXn5Wx9ZOIzUHDIoImkxAJLrltqLRnf2uNB+Uk1Z4fw2DFSl5hGrITLI7GwPh4a6dNaIz4V5CQVLS7hVa+XqxPM/Tyqs8bQjJHZ9e8VAIbyPSlo7dtCkiPhQX1Kd4Le9r8r+6ocOd21tVXCiQQ5GN7nmavWCxKFDBua8vvwpfLOMS4TEPhWbEoBmVWFzrplIP8AuUe2s5xHuD1mUhLDLzub9drUexSGKJIybFxrY7KNSfafgvjQHiLFrnMRna5QbW5VjPpbAIpU7Ix1CmlXPpXb3QU6mCn16teIcKcKaNqcKQdG9OptOFM0c3q+VZnibES2NaaUaVneJoTNU8+nR/Husiw92w/itDIo1HEWKD1u9+tG8LHaHXmKEQqVx8infdfrWFM7yJqAQD7KkJ7hGUgHQ32vyP0pi90FbAhrWNtfZXCOutqTPZ8g7eM3/mIbG3X9/veoo0Dd02HS25qYA5gVsSBa394/WntEHHaR9dQef7/Pzo0FdFy+H61Zj09a1j4b0wZWNie9e17V03Q2tYePOnCvLssOoMb2BFijag+VQmJgW/CZjlaxjOlxzJqbMByK3psiXUsCotzvY66VqEFYqCRzYwTv4OTYfCqEmBGUM0kag3GVe8b726cxuaLzKbEFU0sBcnaqEmbNZj7BpeiyRvHYdInZ2jwwZcx6949QSOXh8KZBgw6tcfjDYcso6W3Pn486uBASQq6HlUir2ZzaabqanbtWcKSRKgDW8tKs4eAfzpSVVdb+XP8ATx8jViPDtiZr5LKTcja/6eJ/xTMa4ZezXWFTYFT/ADCPpTkHt8B2LftJGd+6H5DXKnIffSgmNIZh2gzLcA8jloviC1iLt+bleg2K7xNTyWxD5FzyOygICSQoGg8KVSWHWlUtNbe1rUgqMGnivReMcKcKaKcKQOroNcFdFMzZNqC49byDpRp9qEY8kkAnQbeFZyW8XZRMBEb9KASy/wDdARutE3lyoaBFy3Ec+xqbouPG2k/mLfQE7npSUaW5jmaZh27oO4I1vU5QFdDp40qkYv4fd3F7k8x5U/OQwYWzEc9m8+nOl3T618w2pp3NjuLHSk0kCrK3eAWT+07+3r8/OkxeMN3SVG5G1/Goy3dyvYgDZja3kf1rnauh0dWI2V+6QPA/vTLRjOAR/SOgqPtFKyANZbdDvcdKdLkI/EhdAedvqLfWouyw7A5JbDzt9DRs/WI5WAspYXte4ub+8VWGTOHYlgDqKsmLD/1TJbn3if8A5pAYVT3VeQnYWvb36fA0a23NRSyk3EY0ty6eNTLAqAyYhtDqOd/1+XjU0krqRlVYrHQnVgfLl7qrXKsWYkkm2drEj2UtHzXXkJtluigXAHrN4noPsVWxbJICVC7agDRPLwpzvlAbUG5Ja+pqo8hBBBtRsaVMS3d+dDZ4ye8dD8qKZC5vpbodLeNDcc4a6Log1J6msZRWUMMigkAC1Kojkuda5Udt8PbxvThSpV6Lxz6dSpUqHRThXKVBk+1C8cKVKiq+L8grE+o1AJWtiV86VKpV3z8a0mGb8MEDYCrS3UdQeVKlQ5k2UOAw0qMrbSlSoGJhNzbpUbvZSbb7++lSpNIye7nAyi1+6xGtQsxYG5uMubvKG2B6jwpUqKZqkgqCVsw3EagjUj6U0SFgoJc33BY0qVKGSXe+Wy5TuBaoWQd63xpUqYipiXvEFyi41zHf9Kp7tY77+VKlWTQzS9oCqXVefU+dCsWcw8KVKs5KYhbDU+dKlSqSj//Z" alt="cartImage" width={150} height={100} />
                    </div>
                    <div className="details">
                        Naruto
                        <div className="sum-tag">
                            <Button variant='outlined' className='minus' style={{
                                backgroundColor: 'red',
                                width: '5%'
                            }}>
                                -
                            </Button>
                            <span className='qty'>0</span>
                            <Button className='plus'>
                                +
                            </Button>
                        </div>
                    </div>
                    <div className="price">
                        <span className="">
                            MRP &#8377;
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart