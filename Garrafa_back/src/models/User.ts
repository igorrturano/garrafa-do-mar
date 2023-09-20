export interface CreateBeneficiaryUserInterface {
    id: number
    age: number
    email: string
    gender: string
    name: string
    tags: string[]
    uf: string
    whoareyou: string
    nomo_id: string
}

export interface CreateAngelUserInterface {
    anonymous: boolean
    email: string
    id: number
    nomo_id: string
    tags: string[]
    whoareyou: string
}   
