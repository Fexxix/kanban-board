"use client"

import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
// import { signIn } from "../../../../auth"
import { signIn, getProviders } from "next-auth/react"

export default function GitHubSignInButton() {
  return (
    <Button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="flex gap-2 items center"
    >
      <FaGithub className="w-5 h-5" />
      Sign In using GitHub
    </Button>
  )
}
