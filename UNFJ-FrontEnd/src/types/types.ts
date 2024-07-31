export type User = {
    birthDate: string,
    cpf: string,
    email: string,
    emergencyContact: string,
    nationality: string,
    naturalness: string,
    phone: string,
    fullName: string,
    endereco: Endereco,
    // gradeRecord: gradeRecord, CRIAR ESSE TIPO DEPOIS
}

export type Endereco = {
    addressID: number,
    bairro: string,
    cep: string,
    cidade: string,
    numero: string,
    rua: string
    complemento: string,
    uf: string
}

export type AddressFormTypes = {
    updateAddress: (newAddress:updateAddressType) => void,
    user: User,
    setCep: (value: string) => void,
    cep: string,
    setNumero: (value: string) => void
    numero: string,
}

export type updateAddressType = {
    addressID: number,
    cep: string,
    numero: string,
    complemento: string
}
