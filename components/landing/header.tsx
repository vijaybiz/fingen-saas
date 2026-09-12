import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { UserMenu } from "@/components/landing/user-menu"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
]

export async function Header() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const email = data?.claims.email as string | undefined

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-heading text-lg font-semibold">
          Fingen
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {email ? (
            <UserMenu email={email} />
          ) : (
            <>
              <Button
                variant="ghost"
                nativeButton={false}
                render={<Link href="/login" />}
              >
                Login
              </Button>
              <Button nativeButton={false} render={<Link href="/signup" />}>
                Sign up
              </Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              {email ? (
                <UserMenu email={email} />
              ) : (
                <>
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={<Link href="/login" />}
                  >
                    Login
                  </Button>
                  <Button nativeButton={false} render={<Link href="/signup" />}>
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
