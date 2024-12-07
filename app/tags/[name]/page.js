import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

export async function generateMetadata({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByTag(docs, name)[0];

  return {
    title: matchedDocs.title,
  };
}

export function generateStaticParams() {
  const docs = getDocuments();

  const uniqueTags = [...new Set(docs.flatMap((doc) => doc.tags))];

  return uniqueTags.map((tag) => ({
    name: tag,
  }));
}

export default function TagPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
}
