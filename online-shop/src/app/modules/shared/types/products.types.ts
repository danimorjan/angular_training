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