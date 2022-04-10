function debounce<T extends (...args: any) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | void {
  return function (...args: any[]) {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      fn.apply(this, args);
    }, 300);
  };
}
