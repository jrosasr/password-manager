import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DataTableItems } from "@/components/Shared/DataTableItems";
import { db } from "@/lib/db";

export default async function LoginsElementsPage() {
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
                typeElement: "Inicio de sesión"
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
            <h1 className="font-semibold text-xl md:text-3xl">Lista de login de elementos</h1>
            <DataTableItems elements={user.elements} />
        </div>
    );
}