import Skeleton from "../skeleton";

export default function ActivityCardSkeleton() {
  return (
    <article className="rounded-activity-card overflow-hidden relative">
      {/* Image skeleton */}
      <Skeleton className="w-full h-80" />

      {/* Text area skeleton */}
      <section className="bg-gray-200 p-5 rounded-activity-card-textarea absolute inset-x-0 bottom-0">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4 mb-2" />
        {/* Age range skeleton */}
        <Skeleton className="h-4 w-1/3" />
      </section>
    </article>
  );
}