import GitHubSignInButton from "@/components/GitHubSignInButton"
import { auth } from "../../../auth"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function () {
  const session = await auth()

  if (session) {
    redirect("/")
  }

  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
      <Image
        src="/logo.svg"
        width={0}
        height={0}
        alt="logo"
        className="w-60 h-10"
      />
      <h1 className="text-4xl font-semibold">Sign In</h1>
      <GitHubSignInButton />
      <span className="text-sm text-slate-600">
        If you don't have an account it'll be created
      </span>
    </div>
  )
}
