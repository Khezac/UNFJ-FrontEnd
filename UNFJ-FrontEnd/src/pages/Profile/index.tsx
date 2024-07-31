import styles from './styles.module.css'
import LogoPreta from '../../assets/Logos/logoPreta.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPessoa } from '../../services/pessoaServices'
import { putAddress } from '../../services/addressService'
import { AddressForm } from '../../components/Forms/AddressForm'
import { updateAddressType, User } from '../../types/types'
import { SpinnerLoading } from '../../components/SpinnerLoading/index.tsx'

export const Profile = () => {
    const [user, setUser] = useState<User>();
    const [cep, setCep] = useState<string>();
    const [numero, setNumero] = useState<string>();
    const [exibir, setExibir] = useState<string>("Endereco");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isInfoLoading, setIsInfoLoading] = useState<boolean>(false);

    const { id } = useParams();

    const getInfos = async (id: string) => {
        setIsLoading(true)
        try {
            const { data } = await getPessoa(id);
            setUser(data)
            setCep(data.endereco.cep)
            setNumero(data.endereco.numero)
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }

    const updateAddress = async (newAddress: updateAddressType) => {
        setIsInfoLoading(true)
        try {
            const { data } = await putAddress(newAddress);
            setUser((prev): User => ({ ...prev, endereco: data } as User))
        } catch (err) {
            console.log(err)
        }
        setIsInfoLoading(false)
    }

    useEffect(() => {
        getInfos(id as string)
    }, [])

    const handleChangeExibir = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setExibir(e.currentTarget.id);
    };

    return (
        <>
            <section className={styles.basicInfoSection}>
                <div className={styles.basicInfo}>
                    <img src={LogoPreta} alt="Logo da joker" />
                    <div>
                        {isLoading && !user? 
                            <SpinnerLoading color='black'/>
                        : !isLoading && user ?
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
                        <li
                            className={exibir == "Endereco" ? styles.selected : ""}
                            id='Endereco' onClick={(e) => handleChangeExibir(e)}>
                            Endereço
                        </li>
                        <li
                            className={exibir == "Contatos" ? styles.selected : ""}
                            id='Contatos' onClick={(e) => handleChangeExibir(e)}>
                            Contatos
                        </li>
                        <li
                            className={exibir == "Notas" ? styles.selected : ""}
                            id='Notas' onClick={(e) => handleChangeExibir(e)}>
                            Notas
                        </li>
                        <li
                            className={exibir == "Turmas" ? styles.selected : ""}
                            id='Turmas' onClick={(e) => handleChangeExibir(e)}>
                            Turmas
                        </li>
                    </ul>
                </nav>
                {exibir && exibir == "Endereco" ?
                    <AddressForm
                        updateAddress={updateAddress}
                        user={user as User}
                        setCep={setCep}
                        setNumero={setNumero}
                        cep={cep as string}
                        numero={numero as string}
                        isInfoLoading={isInfoLoading}
                    />
                    : exibir == "Contatos" ?
                        <h1>Contatos</h1>
                        : exibir == "Notas" ?
                            <h1>Notas</h1>
                            : exibir == "Turmas" &&
                            <h1>Turmas</h1>
                }
            </section>
        </>
    )
}