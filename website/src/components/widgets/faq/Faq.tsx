"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { mockData, type FaqData } from "./mockData"

function QuestionList({ questions }: { questions: FaqData["sections"][number]["questions"] }) {
  return (
    <Accordion defaultValue={[0]}>
      {questions.map((item, index) => (
        <AccordionItem key={index} value={index}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default function Faq({ data = mockData }: { data?: FaqData }) {
  return (
    <Card>
      <CardContent>
        <Tabs defaultValue={data.sections[0]?.id}>
          <TabsList className="w-full">
            {data.sections.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="flex-1">
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.sections.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <QuestionList questions={s.questions} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Contact Support
        </Button>
      </CardFooter>
    </Card>
  )
}
