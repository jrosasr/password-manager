"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function Home() {
  const handleClick = () => {
    toast({
      title: "Hello, World!",
    })
  }

  return (
    <Button
      onClick={handleClick}
    >
      Show Toast
    </Button>
  )
}
