export interface ILoginResponse {
    token: string,
}

export interface IErrorResponse {
    msg: string
}

export interface IAllProducts{
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: object,
    title: string,
}