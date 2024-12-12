export interface Billboard{
    id: string;
    label:string;
    imageUrl:string;
}

export interface Category{
    id:string;
    name:string;
    billboard: Billboard
}

export interface Product{
    id:string
    Category: Category
    name:string
    price:string
    isFeatured:boolean
    images:Image[]
    Colour: Colour
    Size: Size
}

export interface Image{
    id:string
    url:string
}

export interface Colour{
    id:string
    name:string
    value:string
}

export interface Size{
    id:string
    name:string
    value:string
}