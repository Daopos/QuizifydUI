import { useArticles } from "@/hooks/useArticles";
import { ArticleService } from "@/services/ArticleService";
import type { CreateArticleDto } from "@/types/IArticle";
import { useState } from "react"
import { useNavigate } from "react-router";

const categories = [
    "General",
    "Quiz Design",
    "Frontend",
    "UX/UI",
    "Productivity",
]

const AddArticle = () => {
    const navigate = useNavigate();

    const [articleCreate, setArticleCreate] = useState<CreateArticleDto>({
        title: "",
        description: "",
        tags: "te",
        category: "",
        // status: "Draft",
        // featureImageUrl: "",
    });

    const { createArticle, article } = useArticles();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            await createArticle(articleCreate)

            navigate("/home")
        } catch (error) {
            console.error("Error creating article:", error)
        }

    }

    return (
        <div className="mx-auto max-w-4xl space-y-8">
            <header className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.8)]">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                    Add Article
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-white">
                    Create a new article entry
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                    Use the form below to add an article with title, description, category, tags, and more.
                </p>
            </header>

            <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.8)]"
            >
                <div className="grid gap-6">
                    <label className="space-y-2">
                        <span className="text-sm font-semibold text-slate-200">Title</span>
                        <input
                            value={articleCreate.title}
                            onChange={(event) => setArticleCreate({ ...articleCreate, title: event.target.value })}
                            placeholder="Enter article title"
                            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </label>

                    <label className="space-y-2">
                        <span className="text-sm font-semibold text-slate-200">Description</span>
                        <textarea
                            value={articleCreate.description}
                            onChange={(event) => setArticleCreate({ ...articleCreate, description: event.target.value })}
                            rows={6}
                            placeholder="Write a short summary or the article content here"
                            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </label>

                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-slate-200">Category</span>
                            <select
                                value={articleCreate.category}
                                onChange={(event) => setArticleCreate({ ...articleCreate, category: event.target.value })}
                                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            >
                                {categories.map((item) => (
                                    <option key={item} value={item} className="bg-slate-950 text-slate-100">
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-slate-200">Tags</span>
                            <input
                                placeholder="quiz, design, minimal"
                                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />
                        </label>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-slate-200">Status</span>
                            <select
                                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            >
                                <option value="Draft">Draft</option>
                                <option value="Published">Published</option>
                            </select>
                        </label>

                        <div className="space-y-2">
                            <span className="text-sm font-semibold text-slate-200">Feature image URL</span>
                            <input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-200">Preview</p>
                        <p className="text-sm text-slate-500">
                            Title, description, category, and tags will appear here once you save the article.
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                        Save Article
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddArticle
