import type { Metadata } from "next";
import ArticleHeader from "@/components/learnings/ArticleHeader";
import ArticleBody from "@/components/learnings/ArticleBody";

export const metadata: Metadata = {
  title: "What the $6.3 billion Binance hack says about letting software act for you",
  description:
    "On 29 October 2026, about $6.3 billion was taken from Binance in roughly twenty minutes. What it says about letting software act for you.",
};

/** Learnings article (Figma 1001:17090, content 1001:17092). Nav and Connect footer come from the root layout. */
export default function LearningsPage() {
  return (
    <article className="ln-article">
      <ArticleHeader />
      <ArticleBody />
    </article>
  );
}
