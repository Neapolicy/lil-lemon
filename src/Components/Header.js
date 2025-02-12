import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return <header className='navbar'>
        <nav>
            <button>BACK</button>
            <div className='info'>
                LITTLE LEMON
                <section>                
                    <FontAwesomeIcon icon={faLocationDot} />
                    WEST LOOP CHICAGO
                    </section>
            </div>
        </nav>
    </header>
}