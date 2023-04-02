import moment from "moment";

export type Product = {
  id: string,
  name: string,
  expiration: string
}

const getPlatformExpiration = (product?: Product) => {
  if (!product) return "";

  const expirationDate = moment(product.expiration);
  const now = moment();
  
  const monthsDiff = expirationDate.diff(now, 'months');
  
  if (monthsDiff > 0) {
    return `Seu acesso expira em: ${monthsDiff} meses`;
  }
  
  const daysDiff = expirationDate.diff(now, 'days');
  
  if (daysDiff > 0) {
    return `Seu acesso expira em: ${daysDiff} dias`;
  }
  
  return 'Seu acesso expira hoje.';
}

export default getPlatformExpiration;