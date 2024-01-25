import { cn } from "@/lib/utils"
import { auth } from "auth"
import { redirect } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {
  const session = await auth()

  if (session) {
    redirect("/boards")
  }

  return (
    <div
      className={cn("flex flex-col justify-center items-center gap-10 h-full")}
    >
      <Image
        src="/logo.svg"
        width={0}
        height={0}
        alt="logo"
        className="w-60 h-10"
      />
      <p className="text-2xl font-semibold">
        &quot;Board&quot; the Productivity Express
      </p>
      <Link href="/login">
        <Button>Get Started</Button>
      </Link>
    </div>
  )
}
