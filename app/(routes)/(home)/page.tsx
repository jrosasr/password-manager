import { getServerSession } from "next-auth"
import { HeaderMain } from "./components/HeaderMain"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"

export default async function Home() {
  const session = await getServerSession()

  if (!session || !session.user?.email) {
    return redirect('/login')
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email
    },
    include: {
      elements: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })

  console.log(user);
  
  if (!user) {
    return redirect('/login')
  }

  return (
    <HeaderMain userId={user.id} />
  )
}
