import React, { useState, useEffect } from 'react'
import Menu from '../images/menu.svg'
import Brand from '../images/brand.svg'

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const nav = document.querySelector('.nav')
        const listContainer = document.querySelector('.nav ul')
        const menu = document.querySelector('.nav .menu')
        menu.addEventListener('click', () => {
            if (isOpen) {
                listContainer.style.display = 'none'
                setIsOpen(false)
            } else {
                listContainer.style.display = 'unset'
                setIsOpen(true)
            }
        })
    }, [])
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <a href="#home">
                        <img src={Brand} className="logo" />
                    </a>
                </div>
                <img src={Menu} className="menu" />
                <ul>
                    <li>
                        <a href="#About">About</a>
                    </li>

                    <li>
                        <a href="#About">Testimonials</a>
                    </li>
                    <li>
                        <a href="#About">Booking</a>
                    </li>
                    <li>
                        <a href="#About">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar2
