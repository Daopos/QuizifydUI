import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";
import { useEffect } from "react";

const Home = () => {

    const { articles, getAllArticles } = useArticles();

    useEffect(() => {
        getAllArticles();
    }, [getAllArticles]);

    return (
        <div className="mx-auto max-w-6xl space-y-8">
            {articles.map((article) => (
                <ArticleCard article={article} />
            ))}
        </div>
    )
}

export default Home;