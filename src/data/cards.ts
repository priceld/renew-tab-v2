
export type CardData = {
  frontRaw: string,
  backRaw: string,
  deck: string,
  hits: number,
  misses: number,
  views: number,
  bucket: number, // not sure about this.
  labels: string[],
};

export async function getCardData(): Promise<CardData> {
  const randoIndex = Math.floor(Math.random() * window.localStorage.length);
  const key = window.localStorage.key(randoIndex);
  if (!key) {
    throw new Error('No key found');
  }
  const item = window.localStorage.getItem(key);
  if (!item) {
    throw new Error('No item found');
  }
  return JSON.parse(item);
}