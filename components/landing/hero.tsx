import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:py-32">
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium text-primary">
          Financial reporting, simplified
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          Close your books in minutes, not weeks
        </h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Fingen brings your accounts, invoices, and reports into one place
          so your team can spend less time reconciling and more time growing.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<Link href="/signup" />}>
            Get started free
            <ArrowRightIcon />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="#pricing" />}
          >
            See pricing
          </Button>
        </div>
      </div>
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 via-primary/5 to-transparent ring-1 ring-foreground/10">
        <div className="absolute inset-6 rounded-xl bg-card ring-1 ring-foreground/10" />
      </div>
    </section>
  )
}
