import Link from "next/link"
import { CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For solo founders getting started.",
    features: ["1 user", "Up to 50 transactions/mo", "Basic reporting"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams that need more.",
    features: [
      "Up to 10 users",
      "Unlimited transactions",
      "Automated invoicing",
      "Priority support",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited users",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & audit logs",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-muted-foreground">
          Start free. Upgrade when your team is ready.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={cn(tier.recommended && "ring-2 ring-primary")}
          >
            <CardHeader>
              {tier.recommended && (
                <span className="mb-2 inline-flex w-fit items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <p className="mt-2 text-3xl font-semibold">
                {tier.price}
                {tier.price !== "Custom" && (
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                )}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={tier.recommended ? "default" : "outline"}
                nativeButton={false}
                render={<Link href="/signup" />}
              >
                Get started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
