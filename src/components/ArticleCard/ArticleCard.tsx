import { Card } from "../ui/card";
const ArticleCard = ({ articleContent }: any) => {
  return (
    <div className="w-1/3 p-4">
      <Card>
        {articleContent ? (
          <div>
            <p>{articleContent}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Card>
    </div>
  );
};

export default ArticleCard;
