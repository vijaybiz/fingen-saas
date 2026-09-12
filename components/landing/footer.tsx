import Link from "next/link"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
]

const socials = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="font-heading text-lg font-semibold">
              Fingen
            </Link>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-sm font-medium">{column.title}</p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fingen. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
