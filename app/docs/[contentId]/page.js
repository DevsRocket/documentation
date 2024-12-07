import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentContent, getDocuments } from "@/lib/doc";

export async function generateMetadata({ params: { contentId } }) {
  const documentContent = await getDocumentContent(contentId);

  return {
    title: documentContent.title,
  };
}

export function generateStaticParams() {
  const docs = getDocuments();

  return docs.map((doc) => ({
    contentId: doc.id,
  }));
}

export default function ContentPage({ params: { contentId } }) {
  return <ContentDisplay id={contentId} />;
}
