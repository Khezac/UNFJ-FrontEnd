import { useState } from 'react'
import { AddressInput } from '../AddressInput'
import styles from './styles.module.css'
import { AddressFormTypes } from '../../../types/types'
import { SpinnerLoading } from '../../SpinnerLoading'

export const AddressForm = (props:AddressFormTypes) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleUpdateAddress = () => {
        setIsDisabled((prev) => !prev)
        
        const newAddress = {
            addressID: props.user?.endereco.addressID as number,
            cep: props.cep as string,
            numero: props.numero as string,
            complemento: props.user?.endereco.complemento as string
        }

        if(isDisabled || props.cep === props.user?.endereco.cep && props.numero === props.user?.endereco.numero) {
            return;
        } else if(!isDisabled && props.cep !== props.user?.endereco.cep || props.numero !== props.user?.endereco.numero) {
            props.updateAddress(newAddress);
        }
    }

    return(
    <div className={styles.detailsInfos}>
        <div className={styles.addressHeader}>
            <h1 className={styles.addressTitle}>Meu endereço</h1>
            <button className={styles.editAddressBtn} disabled={props.isInfoLoading} onClick={handleUpdateAddress}>{props.isInfoLoading ? <SpinnerLoading color='#E8E9F3'/> : "Editar Perfil"}</button>
        </div>
        
        <form className={styles.addressForm}>
            <AddressInput name='CEP' label="CEP:" isDisabled={isDisabled} value={props.user ? props.cep as string : "Não encontrado"} setValue={props.setCep} />
            <AddressInput name='NUMERO' label="NUMERO:" isDisabled={isDisabled} value={props.user ? props.numero as string : "Não encontrado"} setValue={props.setNumero} />
            <AddressInput name='RUA' label="RUA:" isDisabled={true} value={props.user ? props.user?.endereco.rua : "Não encontrado"} setValue={() => { }} />
            <AddressInput name='CIDADE' label="CIDADE:" isDisabled={true} value={props.user ? props.user?.endereco.cidade : "Não encontrado"} setValue={() => { }} />
            <AddressInput name='BAIRRO' label="BAIRRO:" isDisabled={true} value={props.user ? props.user?.endereco.bairro : "Não encontrado"} setValue={() => { }} />
            <AddressInput name="UF" label="UF:" isDisabled={true} value={props.user ? props.user?.endereco.uf : "Não encontrado"} setValue={() => { }} />
        </form>
    </div>
    )
}