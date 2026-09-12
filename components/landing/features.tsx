import {
  BarChart3Icon,
  LockIcon,
  ReceiptIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "lucide-react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: BarChart3Icon,
    title: "Real-time reporting",
    description:
      "See revenue, burn, and runway update live as transactions come in.",
  },
  {
    icon: ReceiptIcon,
    title: "Automated invoicing",
    description:
      "Generate, send, and chase invoices without leaving Fingen.",
  },
  {
    icon: WalletIcon,
    title: "Multi-account sync",
    description:
      "Connect every bank and card account and reconcile automatically.",
  },
  {
    icon: UsersIcon,
    title: "Team collaboration",
    description:
      "Invite your accountant and teammates with role-based access.",
  },
  {
    icon: LockIcon,
    title: "Bank-grade security",
    description:
      "Your data is encrypted at rest and in transit, always.",
  },
  {
    icon: ZapIcon,
    title: "Fast close",
    description:
      "Cut your month-end close from weeks to a few clicks.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Everything you need to run finance
        </h2>
        <p className="mt-3 text-muted-foreground">
          One tool for bookkeeping, invoicing, and reporting — built for
          growing teams.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4.5" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
