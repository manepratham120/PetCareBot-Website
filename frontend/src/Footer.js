import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <ul class="list">
                    <li className = 'lists'><a href="#" >Home</a></li>
                    <li className = 'lists'><a href="#">Features</a></li>
                    <li className = 'lists'><a href="#">Pricing</a></li>
                    <li className = 'lists'><a href="#">FAQs</a></li>
                    <li className = 'lists'><a href="#">About</a></li>
                </ul>
                <p class="lists">© 2022 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer