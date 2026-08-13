// Auto-generated stub.
import { copyToClipboardWithMeta } from "@/components/create/copy-button";
type Ret = readonly [{ copyToClipboard: typeof copyToClipboardWithMeta; isCopied: boolean; copied: boolean; error: any }, typeof copyToClipboardWithMeta];
export function useCopyToClipboard(_timeout = 2000): Ret {
  const fn: any = copyToClipboardWithMeta;
  return [{ copyToClipboard: fn, isCopied: false, copied: false, error: null }, fn] as const;
}
