import React from 'react';
import './foot.styles.css';

const Foot = () => {
    return ( 

        <section >
            <footer>
            <div className="footer-left">
                <img src="img/logo.png" alt=""/>
				    <h3>Sobre<span>Vagachontal</span></h3>

				<p className="footer-links">
					{/* <a href="#!">Home</a> 
					|*/}
					<a href="#!">Acerca de</a>
					|
					<a href="#!">Contacto</a>
				</p>

				<p className="footer-company-name">© 2020 Vagachontal</p>
			</div>
            <div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					  <p><span></span>
						Juigalpa, Chontales</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+505 85411756</p>
					<br/>
					<i className="fa fa-phone"></i>
					<p>+505 82213400</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="vagachontal@gmail.com">vagachontal@gmail.com</a></p>
				</div>
			</div>

            <div className="footer-right">
				<p className="footer-company-about">
					<span>Acerca Vagachontal</span>
				</p>
				<div className="footer-icons">
					<a href="#!"><i className="fa fa-instagram"></i></a>
					<a href="#!"><i className="fa fa-facebook"></i></a>
				</div>
			</div>

            </footer>
        </section>
     );
}
 
export default Foot;