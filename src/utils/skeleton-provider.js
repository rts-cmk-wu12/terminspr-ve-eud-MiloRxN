export default function skeletonProvider(numberOfItems, Element) {
  return Array.from({ length: numberOfItems }, (_, index) => (
    <Element key={index} />
  ));
}
