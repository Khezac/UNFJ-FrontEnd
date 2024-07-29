import styles from './styles.module.css'
import logo from '../../assets/Logos/logoUNFJ.png'
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate()
    const id = 1; //ESTE ID DEVE SER PEGO DE QUEM ESTÁ LOGADO NO MOMENTO

    return (
        <header className={styles.headerContainer}>
            <img src={logo} />
            <nav>
                <ul className={styles.menuNav}>
                    <li onClick={() => {navigate("/")}}>
                        <IoHomeOutline size={25} /> Home
                    </li>
                    <li>
                        <PiStudent size={30} /> Alunos 
                    </li>
                    <li>
                        <AiOutlineProfile size={30} /> Turmas 
                    </li>
                    <li onClick={() => {navigate("/profile/" + id)}}>
                        <CgProfile size={30} /> Perfil
                    </li>
                </ul>
            </nav>
        </header>
    )
}