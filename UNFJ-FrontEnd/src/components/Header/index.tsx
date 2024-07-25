import styles from './styles.module.css'
import logo from '../../assets/Logos/logoHeader.png'
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src={logo}/>
            <nav>
                <ul className={styles.menuNav}>
                    <li>Alunos <PiStudent size={24}/></li>
                    <li>Turmas <AiOutlineProfile size={24}/></li>
                    <li>Perfil <CgProfile size={24}/></li>
                </ul>
            </nav>
        </div>
    )
}