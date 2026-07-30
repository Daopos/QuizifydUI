import type { CreateArticleDto, IArticle } from "@/types/IArticle";
import AxiosClient from "@/axios-client/axios-client";


export const ArticleService = {

    createArticle: async (data: CreateArticleDto): Promise<IArticle> => {

        const response = await AxiosClient.post<IArticle>("/blog", data);

        return response.data;
    },

    getAllArticles: async (): Promise<IArticle[]> => {

        const response = await AxiosClient.get<IArticle[]>("/blog");

        console.log(`${import.meta.env.VITE_APP_SERVER}`)
        console.log(response)
        console.log("Response from getAllArticles:", response.data);

        return response.data;
    }
}