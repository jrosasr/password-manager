import { getServerSession } from "next-auth"
import {db} from "@/lib/db"

import { redirect } from "next/navigation"
import { DataTableItems } from "@/components/Shared/DataTableItems"

export default async function favouritePage() {
  const session = await getServerSession()

  if (!session || !session.user?.email) {
    redirect("/login")
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email
    },
    include: {
      elements: {
        where: {
          isFavourite: true
        },
        orderBy: {
          createdAt: "desc"
        }
      }
    }
  })

  if (!user || !user.elements) {
    redirect("/login")
  }

  return (
    <div>
      <h1>
        Favourites page
      </h1>
      <DataTableItems elements={user.elements} />
    </div>
  )
}
