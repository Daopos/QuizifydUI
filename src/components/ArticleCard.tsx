import type { IArticle } from "@/types/IArticle";

const ArticleCard = ({ article }: { article: IArticle }) => {

    return (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.8)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                        Featured article
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold text-white">
                        Quizifyd: {article.title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                        {article.description}
                    </p>
                </div>
                <div className="rounded-2xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 shadow-sm shadow-slate-900/50">
                    Article card
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl bg-slate-800 p-4 text-slate-200 shadow-sm shadow-slate-950/40">
                    <h2 className="text-sm font-semibold text-white">What you’ll see</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                        A short summary, a strong title, and a clean description keep the page
                        calm and easy to scan.
                    </p>
                </article>
                <article className="rounded-2xl bg-slate-800 p-4 text-slate-200 shadow-sm shadow-slate-950/40">
                    <h2 className="text-sm font-semibold text-white">Why it works</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                        Minimal styling and subtle borders let your content shine without visual noise.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default ArticleCard;