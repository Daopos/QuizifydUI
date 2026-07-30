
export interface IArticle {
    id: number;
    title: string;
    description: string;
    category: string,
    tags: string;
}

export type CreateArticleDto = Omit<IArticle, 'id'>;
export type UpdateArticleDto = Partial<CreateArticleDto>;

// types/product.ts
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// export type CreateProductDto = Omit<Product, 'id'>;
// export type UpdateProductDto = Partial<CreateProductDto>;