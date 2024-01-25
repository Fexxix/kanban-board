import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { signOut, auth } from "auth"
import { redirect } from "next/navigation"

export default async function () {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <div
      className={cn("flex flex-col justify-center items-center gap-10 h-full")}
    >
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button>SignOut</Button>
      </form>
    </div>
  )
}
