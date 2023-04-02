const jsonParse = (data: any) => {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export default jsonParse;