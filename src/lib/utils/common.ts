export function getTitleFromHtml(html: string): string {
  const startIdx = html.search(/<title>.*<\/title>/);
  if (startIdx < 0) return "";
  const endIdx = html.search(/<\/title>/);
  if (endIdx < 0) return "";
  return html.slice(startIdx, endIdx).slice("<title>".length);
}
