import '../styles/Header.css'

export default function Header(){
    
    return (
        <header className="header">
            <div className="logo">PROPHET JOSH</div>
            <nav>
                <ul>
                    <li>
                        ABOUT
                    </li>
                    <li>
                        TEACHING
                    </li>
                    <li>
                        EVENTS
                    </li>
                </ul>
            </nav>
            <button className="donate-btn">DONATE</button>
        </header>
        
    )
}