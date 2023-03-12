export const bodyToHtml = (body: string): string => {
  const bodyJson = JSON.parse(body);
  const bodyHtml = Object.keys(bodyJson).map((key) => {
    const value = bodyJson[key];
    if (Array.isArray(value)) {
      return `<p>${key}: ${value.join(', ') || '-'}</p>`;
    }
    return `<p>${key}: ${value || '-'}</p>`;
  }).join('');
  return bodyHtml;
};
