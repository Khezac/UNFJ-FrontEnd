import styles from './styles.module.css'
import logo from '../../assets/Logos/logoUNFJ.png'
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img src={logo}/>
            <nav>
                <ul className={styles.menuNav}>
                    <li>Alunos <PiStudent size={30}/></li>
                    <li>Turmas <AiOutlineProfile size={30}/></li>
                    <li>Perfil <CgProfile size={30}/></li>
                </ul>
            </nav>
        </header>
    )
}