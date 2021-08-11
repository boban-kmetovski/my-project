export interface Borower {
    name: string,
    phone: string,
    email: string,
    embg: string,
    bankId: string
}

export interface Company {
    name: string,
    borower: string
}