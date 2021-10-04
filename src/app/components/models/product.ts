import { Image } from 'src/app/components/models/image';

export interface Product {
    id: number,
    title: string,
    oldPrice: number,
    currentPrice: number,
    shortDesc: string,
    LongDesc: string,
    sku: string,
    inStock: boolean,
    addInfo: string,  //aditional info
    published_at: string,
    slug: string,  //short name to redirect
    categoryId: number,
    outOfStock: boolean,
    onSell: boolean,
    images: Image[]
}