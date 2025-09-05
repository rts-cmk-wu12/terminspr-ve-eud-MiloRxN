import Skeleton from ".";

export default function CalenderItemSkeleton() {
  return (
    <section className="rounded-calender-items bg-white p-5">
      {/* Activity name skeleton */}
      <Skeleton className="h-8 w-3/4 mb-2" />
      {/* Day and time skeleton */}
      <Skeleton className="h-4 w-1/3" />
    </section>
  );
}
