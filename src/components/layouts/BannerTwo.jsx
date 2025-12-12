import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'


const BannerTwo = () => {
  return (
    <>
    <Container className={"py-[130px]"}>
        <Link to={"/"}>
        <div className="bg-[url('/src/assets/bannerTwo.png')] py-[150px]  bg-cover bg-no-repeat bg-center w-full"></div>
        </Link>
    </Container>
    </>
  )
}

export default BannerTwo