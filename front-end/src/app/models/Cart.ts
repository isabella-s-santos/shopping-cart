export default interface Cart {
    _id: string;
    _idUser: string;
    products: {
        _idProduct: string;
        quantity: number;
    }[];
    totalPrice: number;
};