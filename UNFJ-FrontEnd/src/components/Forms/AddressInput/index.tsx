import styles from './styles.module.css'

type InputTypes = {
        name: string,
        label:string,
        isDisabled: boolean,
        value: string,
        setValue: (value:string) => void;
}

export const AddressInput = (props:InputTypes) => {

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor={props.name}>{props.label}</label>
            <input 
            className={props.isDisabled ? styles.disabledInput : styles.enabledInput} 
            type="text" 
            name={props.name} 
            disabled={props.isDisabled} 
            value={props.value} 
            onChange={(e) => {props.setValue(e.target.value)}}/>
        </div>
    )
}