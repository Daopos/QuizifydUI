import type { CreateArticleDto, IArticle } from "@/types/IArticle";
import AxiosClient from "@/axios-client/axios-client";


export const ArticleService = {

    createArticle: async (data: CreateArticleDto): Promise<IArticle> => {

        const response = await AxiosClient.post<IArticle>("/blog", data);

        return response.data;
    },

    const getAllArticles = async () => {
        const articles = await ArticleService.getAllArticles();

        console.log("API Response:", articles);
        console.log("Is Array:", Array.isArray(articles));

        setArticles(articles);
    };
}