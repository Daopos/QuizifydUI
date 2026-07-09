import { ArticleService } from "@/services/ArticleService";
import type { CreateArticleDto, IArticle } from "@/types/IArticle";
import { useState } from "react";

export function useArticles() {
  const [article, setArticle] = useState<IArticle>();

  const createArticle = async (data: CreateArticleDto) => {
    const newArticle = await ArticleService.createArticle(data);
    setArticle(newArticle);
  };

  return {
    article,
    createArticle,
  };
}
