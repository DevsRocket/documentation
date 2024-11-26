import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";

export function generateStaticParams() {
  const docs = getDocuments();

  return docs.map((doc) => ({
    subContentId: doc.id,
  }));
}

export default function SubContentPage({ params: { subContentId } }) {
  return <ContentDisplay id={subContentId} />;
}
