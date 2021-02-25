//
export const scrollBar = (): number => {
  const top: number =
    document.documentElement.scrollTop || document.body.scrollTop;
  const height: number =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const cHeight: number =
    document.documentElement.clientHeight || document.body.clientHeight;
  const diff = height - top - cHeight
  return diff;
}