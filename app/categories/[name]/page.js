import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);
  return (
    <>
      <ContentDisplay id={matchedDocuments[0].id} />
    </>
  );
};

export default CategoryPage;
