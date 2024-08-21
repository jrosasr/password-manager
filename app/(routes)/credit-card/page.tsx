import { getServerSession } from "next-auth"
import {db} from "@/lib/db"
import { DataTableItems } from "@/components/Shared/DataTableItems"
import { redirect } from "next/navigation"

export default async function CreditCardsPage() {
    const session = await getServerSession()

    if (!session || !session.user?.email) {
        redirect('/')
    }

    const user = await db.user.findUnique({
        where: {
            email: session?.user.email
        },
        include: {
            elements: {
                where: {
                    typeElement: 'Tarjeta'
                },
                orderBy: {
                    createdAt: 'desc'
                }
            }
        }
    })

    if (!user || !user.elements) {
        redirect('/')
    }
  return (
    <div>
      <h1 className="font-semibold text-xl md:text-3xl">Targetas de crédito</h1>
      <DataTableItems elements={user.elements} />
    </div>
  )
}
