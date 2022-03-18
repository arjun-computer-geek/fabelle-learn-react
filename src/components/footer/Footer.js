import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <footer>
        <section>
            <a href="#">Fabelle Business</a>
            <a href="#">Teach on Fabelle</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
        </section>
        <section>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Help and Support</a>
            <a href="#">Investors</a>
        </section>
        <section>
            <a href="#">Term</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Download App</a>
            <a href="#">Developers</a>
        </section>
        <section>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i><span>Github</span></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i><span>Linked In</span></a>
            <a href="#"><i className="fa fa-user" aria-hidden="true"></i><span>Profile</span></a>
        </section>
    </footer>
  )
}
