// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect, @typescript-eslint/no-empty-object-type */
"use client"

import * as React from "react"

import { useConfig } from "@/hooks/use-config"
import { Tabs } from "@/registry/new-york-v4/ui/tabs"

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig()

  const installationType = React.useMemo(() => {
    return config.installationType || "cli"
  }, [config])

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as "cli" | "manual" })
      }
      className="relative mt-6 w-full *:data-[slot=tabs-list]:gap-6"
    >
      {children}
    </Tabs>
  )
}
