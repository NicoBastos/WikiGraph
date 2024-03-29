import { Card } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCard = ({ articleContent, didMount }: any) => {
  const skeletonLoader = (
    <>
      <div className="space-y-4">
        <Skeleton className="h-4 w-3/4 m-1 mt-6" />
        <Skeleton className="h-8 m-1" />
        <Skeleton className="h-6 w-1/2 m-1" />
        <Skeleton className="h-16 w-2/3 m-1" />
        <Skeleton className="h-max w-1/2 m-1" />
        {/* <Skeleton className="h-8 w-3/4" /> */}
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 m-1" />
        <Skeleton className="h-max w-1/2 m-1" />
        <Skeleton className="h-6 w-1/2 m-1" />
        <Skeleton className="h-16 w-2/3 m-1" />
        <Skeleton className="h-4 w-3/4 m-1 mt-8" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-max w-1/2 m-1" />
        <Skeleton className="h-8 m-1" />
        <Skeleton className="h-16 w-2/3 m-1" />
        <Skeleton className="h-6 w-1/2 m-1" />
        <Skeleton className="h-4 w-3/4 m-1 mt-8" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 m-1 mt-8" />
        <Skeleton className="h-4 w-3/4 m-1 " />
        <Skeleton className="h-6 w-1/2 m-1" />
        <Skeleton className="h-16 w-2/3 m-1" />
        <Skeleton className="h-max w-1/2 m-1" />
        {/* <Skeleton className="h-8 w-3/4" /> */}
      </div>
    </>
  );
  console.log("bool:", articleContent || didMount.current);
  return (
    <Card className="h-full dark">
      <div className="overflow-y-auto p-4 h-full">
        {articleContent ? (
          <>
            {/* <h1 className="text-lg md:text-xl">{searchTerm}</h1> */}
            <div
              className="text-base md:text-lg leading-relaxed mb-4 text-white"
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />
          </>
        ) : (
          <>{skeletonLoader}</>
        )}
      </div>
    </Card>
  );
};

export default ArticleCard;
