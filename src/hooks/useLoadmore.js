export function scrollToMore() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight || document.body.scrollHeight;
  const cHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const threshold = 500;
  const diff = height - top - cHeight
  if (diff <= threshold) return true;
}