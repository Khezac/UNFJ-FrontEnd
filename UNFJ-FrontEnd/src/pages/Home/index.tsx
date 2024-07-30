import styles from './styles.module.css'
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { useNavigate } from 'react-router';

export const Home = () => {

    const navigate = useNavigate();

    //FAZER ESSES BOTÕES SEREM REDIRECIONADOS PARA O PERFIL DE QUEM ESTÀ LOGADO PEGANDO O ID DELE

    return (
        <>
            <section className={styles.firstSection}>
                <h1 className={styles.firstSectionTitle}>Venha construir seu futuro na Universidade Federal Joker's</h1>
                <button className={styles.firstSectionBtn}>
                    Começar agora
                </button>
            </section>
            <section className={styles.secondSection}>
                <h1 className={styles.secondSectionTitle}>Serviços</h1>
                <div className={styles.cardsContainer}>
                    <div style={{backgroundColor: "#E0A34C"}} className={styles.secondSectionCard} onClick={() => navigate("/")}>
                        <PiStudent size={100} />
                        <h1>Matricular Aluno</h1>
                        <p>Visualize ou modifique matrículas e notas de alunos.</p>
                    </div>
                    <div style={{backgroundColor: "#B1E5F2"}} className={styles.secondSectionCard} onClick={() => navigate("/")}>
                        <AiOutlineProfile size={100} />
                        <h1>Gerenciar Turmas</h1>
                        <p>Conferir, registrar ou alterar turmas.</p>
                    </div>
                    <div style={{backgroundColor: "#1F7396"}} className={styles.secondSectionCard} onClick={() => navigate("/profile/1")}>
                        <CgProfile size={100} />
                        <h1>Visualizar Perfil</h1>
                        <p>Gerir informações relacionadas ao seu perfil.</p>
                    </div>
                </div>
            </section>
        </>
    )
}