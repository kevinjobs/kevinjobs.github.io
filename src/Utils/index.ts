export function scrollToMore() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight || document.body.scrollHeight;
  const cHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const threshold = 500;
  const diff = height - top - cHeight
  if (diff <= threshold) return true;
}

export function debounce (fn: Function, wait: number) {
  let timer: number | null = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  }
}