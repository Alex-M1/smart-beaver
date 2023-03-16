export const bodyToHtml = (body: Record<string, string>): string => {
  const bodyHtml = Object.keys(body).map((key) => {
    const value = body[key];
    if (Array.isArray(value)) {
      return `<p><b>${key}</b>: ${value.join(', ') || '-'}</p>`;
    }
    return `<p><b>${key}</b>: ${value || '-'}</p>`;
  }).join('');
  return bodyHtml;
};
