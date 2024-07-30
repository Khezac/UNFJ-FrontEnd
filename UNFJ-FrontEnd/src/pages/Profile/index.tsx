import styles from './styles.module.css'
import LogoPreta from '../../assets/Logos/logoPreta.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPessoa } from '../../services/pessoaServices'
import { AddressInput } from '../../components/Forms/AddressForm/AddressInput'

type User = {
    birthDate: string,
    cpf: string,
    email: string,
    emergencyContact: string,
    nationality: string,
    naturalness: string,
    phone: string,
    fullName: string,
    endereco: Endereco,
    // gradeRecord: gradeRecord, CRIAR ESSES DOIS TIPOS DEPOIS
}

type Endereco = {
    addressID: number,
    bairro: string,
    cep: string,
    cidade: string,
    numero: string,
    rua: string
    uf: string,
}

export const Profile = () => {
    const [user, setUser] = useState<User>();
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

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
        console.log(user?.endereco.bairro)
    }, [])

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
                    <div className={styles.addressHeader}>
                        <h1 className={styles.addressTitle}>Meu endereço</h1>
                        <button className={styles.editAddressBtn} onClick={() => { setIsDisabled((prev) => !prev) }}>Editar</button>
                    </div>
                    <form className={styles.addressForm}>
                        <AddressInput name='CEP' label="CEP:" isDisabled={isDisabled} value={user ? user.endereco.cep : "Não encontrado"} />
                        <AddressInput name='NUMERO' label="NUMERO:" isDisabled={isDisabled} value={user ? user.endereco.numero : "Não encontrado"} />
                        <AddressInput name='RUA' label="RUA:" isDisabled={isDisabled} value={user ? user.endereco.rua : "Não encontrado"} />
                        <AddressInput name='CIDADE' label="CIDADE:" isDisabled={isDisabled} value={user ? user.endereco.cidade : "Não encontrado"} />
                        <AddressInput name='BAIRRO' label="BAIRRO:" isDisabled={isDisabled} value={user ? user.endereco.bairro : "Não encontrado"} />
                        <AddressInput name='UF' label="UF:" isDisabled={isDisabled} value={user ? user.endereco.uf : "Não encontrado"} />
                    </form>
                </div>
            </section>
        </>
    )
}