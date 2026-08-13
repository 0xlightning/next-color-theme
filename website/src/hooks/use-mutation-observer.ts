// Auto-generated stub.
import * as React from "react";
export const useMutationObserver = (
  ref: React.RefObject<Element | null>,
  callback: MutationCallback,
  options?: MutationObserverInit
) => {
  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new MutationObserver(callback);
    observer.observe(ref.current, options);
    return () => observer.disconnect();
  }, [ref, callback, options]);
};
