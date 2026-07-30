import { ArticleService } from "@/services/ArticleService";
import type { CreateArticleDto, IArticle } from "@/types/IArticle";
import { useState } from "react";

export function useArticles() {
  const [article, setArticle] = useState<IArticle>();

  const [articles, setArticles] = useState<IArticle[]>([]);

  const createArticle = async (data: CreateArticleDto) => {
    const newArticle = await ArticleService.createArticle(data);
    setArticle(newArticle);
  };

  const getAllArticles = async () => {
    const articles = await ArticleService.getAllArticles();

    setArticles(articles);
  };

  return {
    article,
    articles,
    createArticle,
    getAllArticles,
  };
}
