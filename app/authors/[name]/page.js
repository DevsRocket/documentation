import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

export async function generateMetadata({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name)[0];

  return {
    title: matchedDocs.author,
  };
}

export function generateStaticParams() {
  const docs = getDocuments();

  return docs.map((doc) => ({
    name: doc.author,
  }));
}

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);

  return <ContentDisplay id={matchedDocs[0].id} />;
}
