import styles from './styles.module.css'
import LogoPreta from '../../assets/Logos/logoPreta.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPessoa } from '../../services/pessoaServices'

type User = {
    birthDate: string,
    cpf: string,
    email: string,
    emergencyContact: string,
    nationality: string,
    naturalness: string,
    phone: string,
    fullName: string,
    // endereco: endereco,
    // gradeRecord: gradeRecord, CRIAR ESSES DOIS TIPOS DEPOIS
}

export const Profile = () => {
    const [user, setUser] = useState<User>();
    
    const { id } = useParams();

    const getInfos = async (id: string) => {
        try {
            const { data } = await getPessoa(id);
            setUser(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getInfos(id as string)
    },[])

    return (
        <>
            <section className={styles.basicInfoSection}>
                <div className={styles.basicInfo}>
                    <img src={LogoPreta} alt="Logo da joker" />
                    <div>
                        {user ?
                            <ul className={styles.infosContainer}>
                            <li><h1>{user.fullName}</h1></li>
                            <li>
                                <p>Telefone:<span> {user.phone}</span></p>
                            </li>
                            <li>
                                <p>Email:<span> {user.email}</span></p>
                            </li>
                        </ul>
                        :
                        <h1>Usuário não encontrado</h1>
                        }
                        
                    </div>
                </div>
                <button className={styles.editBasicBtn}>Editar Perfil</button>
            </section>
            <section className={styles.detailsSection}>
                <nav className={styles.sideBar}>
                    <ul>
                        <li>Endereço</li>
                        <li>Contatos</li>
                        <li>Notas</li>
                        <li>Turmas</li>
                    </ul>
                </nav>
                <div className={styles.detailsInfos}>
                    <h1>Exibição de coisas</h1>
                </div>
            </section>
        </>
    )
}