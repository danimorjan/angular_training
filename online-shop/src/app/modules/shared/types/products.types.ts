export interface Product {
    id: string;
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;

}

export interface OrderProduct {
    product: Product,
    quantity: number
}

export interface OrderProductID {
    productId: string,
    quantity: number
}


export interface Order {
    customerId: string,
    products: OrderProductID[]
}

export interface ProductInsert {
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;
}

export interface Credentials {
    username: string;
    password: string;
}
export type Role = "customer" | "admin" | "user"

export interface User {
    username: string;
    fullName: string;
    reoles: Role[];
}