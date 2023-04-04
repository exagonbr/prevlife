import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-body">
                <ul className="left-panel list-inline mb-0 p-0">
                    <li className="list-inline-item">Politicas de Privacidade</li>
                    <li className="list-inline-item">Termos de Uso</li>
                </ul>
                <div className="right-panel">
                    ©<script>document.write(new Date().getFullYear())</script>  PrevLife, Made with
                    <span className="text-gray">
                    </span> by <Link to="https://www.batterycontrol-usa.com/"> Battery Control </Link>.
                </div>
            </div>
        </footer>
    )
}

export default Footer
