import { Customizer } from "@/components/create/customizer"
import { ShowcaseBlock } from "@/components/create/showcase-block"
import { ThemeScope } from "@/components/create/theme-scope"
import { DesignSystemProvider } from "@/components/create/use-design-system"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Create — Next Color Theme",
  description: "Customize the theme live in light and dark.",
}

export default function CreatePage() {
  return (
    <DesignSystemProvider>
      <div className="flex min-h-screen w-full bg-zinc-50 font-sans text-zinc-900">
        <aside className="sticky top-0 hidden h-screen shrink-0 md:block">
          <Customizer />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <SiteHeader active="/create">
            <p className="text-xs text-zinc-500">Light and dark, side by side</p>
          </SiteHeader>

          {/* Both scopes are live at once: one card per mode, same config. */}
          {/* items-start, not stretch: each card takes its natural height and
              the page scrolls. Stretching them to the flex row's height made
              the Card clip its own content. */}
          <div className="grid min-w-0 items-start gap-4 p-4 sm:p-6 lg:grid-cols-2">
            <ThemeScope mode="light" className="min-w-0">
              <ShowcaseBlock mode="light" />
            </ThemeScope>
            <ThemeScope mode="dark" className="min-w-0">
              <ShowcaseBlock mode="dark" />
            </ThemeScope>
          </div>
        </div>
      </div>
    </DesignSystemProvider>
  )
}
