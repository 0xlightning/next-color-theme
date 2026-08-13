// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect, @typescript-eslint/no-empty-object-type */
import { cn } from "@/lib/utils"

export function PageNav({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-wrapper scroll-mt-24", className)} {...props}>
      <div className="container flex items-center justify-between gap-4 py-4">
        {children}
      </div>
    </div>
  )
}
