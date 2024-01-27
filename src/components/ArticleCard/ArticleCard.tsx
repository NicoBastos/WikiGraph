import { Suspense } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCard = ({ articleContent }: any) => {
  const skeletonLoader = (
    <div className="space-y-2">
      {/* Adjust the number and style of Skeleton components as needed */}
      <Skeleton className="h-4 w-3/4 m-1 mt-8" />
      <Skeleton className="h-8 m-1" />
      <Skeleton className="h-6 w-1/2 m-1" />
      <Skeleton className="h-16 w-2/3 m-1" />
      <Skeleton className="h-8 w-3/4" />
    </div>
  );
  return (
    <div className="p-6 rounded-lg shadow-lg m-8">
      <Suspense fallback={skeletonLoader}>
        <Card>
          {/* {skeletonLoader} */}
          <p className="m-4">{articleContent}</p>
        </Card>
      </Suspense>
    </div>
  );
};

export default ArticleCard;
