import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";

export function generateStaticParams() {
  const docs = getDocuments();

  return docs.map((doc) => ({
    contentId: doc.id,
  }));
}

export default function ContentPage({ params: { contentId } }) {
  return <ContentDisplay id={contentId} />;
}
