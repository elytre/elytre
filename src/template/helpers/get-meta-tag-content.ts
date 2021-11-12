export default function getMetaTagContent(property: string): string | null {
  const tags = Array.from(document.getElementsByTagName('meta'));
  const foundTag = tags.find((tag) => {
    return (
      tag.getAttribute('name') === property ||
      tag.getAttribute('property') === property
    );
  });
  return foundTag?.content ?? null;
}
