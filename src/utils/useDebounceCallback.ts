export const debounceFunc = (callback: () => void, delay: number = 3000) => {
    const delayDebounceFn = setTimeout(() => {
        callback();
      }, delay);
    return () => clearTimeout(delayDebounceFn);
}