import styles from './styles.module.css'

type InputTypes = {
    label:string,
    name: string,
    isDisabled: boolean,
    value: string
}

export const AddressInput = ({label, name, isDisabled, value}:InputTypes) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor={name}>{label}</label>
            <input className={styles.input} type="text" name={name} disabled={isDisabled} placeholder={value} />
        </div>
    )
}