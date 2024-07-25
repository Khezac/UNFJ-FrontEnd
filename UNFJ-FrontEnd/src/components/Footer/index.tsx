import logo from '../../assets/Logos/logoBranca.png'
import styles from './styles.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo}/>
            <div>
                <p>Este é um código
                    <a className={styles.openSource} href='https://github.com/Khezac/UNFJ-FrontEnd' target='blank_'> Open Source</a>
                </p>
                <p>2024, desenvolvido pela @Joker's Company.</p>
            </div>
        </footer>
    )
}