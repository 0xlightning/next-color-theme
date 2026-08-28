import { DesignGallery } from "@/components/creates/design-gallery"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Saved Designs — Next Color Theme",
  description: "Reopen a design you saved earlier.",
}

export default function CreatesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans text-zinc-900">
      <SiteHeader active="/creates" />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Saved Designs
          </h1>
          <p className="text-sm text-zinc-600">
            Stored in this browser. Load one back into the customizer to keep
            editing or export it.
          </p>
        </div>

        <DesignGallery />
      </main>
    </div>
  )
}
