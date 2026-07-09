import type { CreateArticleDto, IArticle } from "@/types/IArticle";
import AxiosClient from "@/axios-client/axios-client";


export const ArticleService = {

    createArticle: async (data: CreateArticleDto): Promise<IArticle> => {

        const response = await AxiosClient.post<IArticle>("/blog", data);

        return response.data;
    }
}