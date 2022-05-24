export default function getArtworkImageData({ data }) {
  return data?.allImageSharp?.nodes.find((node) => {
    return node?.parent?.id?.startsWith("Artwork");
  });
}
