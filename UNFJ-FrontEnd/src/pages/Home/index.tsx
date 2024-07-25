import styles from './styles.module.css'
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";

export const Home = () => {
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
                    <div style={{backgroundColor: "#E0A34C"}} className={styles.secondSectionCard}>
                        <PiStudent size={100} />
                        <h1>Matricular Aluno</h1>
                        <p>Matricular novo aluno em uma turma</p>
                    </div>
                    <div style={{backgroundColor: "#B1E5F2"}} className={styles.secondSectionCard}>
                        <AiOutlineProfile size={100} />
                        <h1>Matricular Aluno</h1>
                        <p>Matricular novo aluno em uma turma</p>
                    </div>
                    <div style={{backgroundColor: "#1F7396"}} className={styles.secondSectionCard}>
                        <CgProfile size={100} />
                        <h1>Matricular Aluno</h1>
                        <p>Matricular novo aluno em uma turma</p>
                    </div>
                </div>
            </section>
        </>
    )
}