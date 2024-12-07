import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentContent, getDocuments } from "@/lib/doc";

export async function generateMetadata({ params: { subContentId } }) {
  const documentContent = await getDocumentContent(subContentId);

  return {
    title: documentContent.title,
  };
}

export function generateStaticParams() {
  const docs = getDocuments();

  return docs.map((doc) => ({
    subContentId: doc.id,
  }));
}

export default function SubContentPage({ params: { subContentId } }) {
  return <ContentDisplay id={subContentId} />;
}
