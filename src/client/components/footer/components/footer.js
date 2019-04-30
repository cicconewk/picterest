import React from 'react'

export default function Footer (props) {
  return(
    <footer className="footer pt-5 pb-5 text-center">
      <div className="container">
        <div className="socials-media">
          <ul className="list-unstyled">
            <li className="d-inline-block ml-1 mr-1"><a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a></li>
            <li className="d-inline-block ml-1 mr-1"><a href="#" className="text-dark"><i className="fab fa-twitter"></i></a></li>
            <li className="d-inline-block ml-1 mr-1"><a href="#" className="text-dark"><i className="fab fa-instagram"></i></a></li>
            <li className="d-inline-block ml-1 mr-1"><a href="#" className="text-dark"><i className="fab fa-google-plus"></i></a></li>
            <li className="d-inline-block ml-1 mr-1"><a href="#" className="text-dark"><i className="fab fa-behance"></i></a></li>
            <li className="d-inline-block ml-1 mr-1"><a href="#" className="text-dark"><i className="fab fa-dribbble"></i></a></li>
          </ul>
        </div>

        <p>
          © <span className="credits font-weight-bold">        
            <a target="_blank" className="text-dark" href="https://github.com/cicconewk/picterest"><u>Picterest</u></a>
          </span>
        </p>
      </div>
    </footer>
  )
}
