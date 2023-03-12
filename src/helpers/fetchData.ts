export const fetchData = async (url: string, method: string, body?: object): Promise<any> => {
  const response = await fetch(url, {
    method,
    body,
  });
  return response.json();
};
