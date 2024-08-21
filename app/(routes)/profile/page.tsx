import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FormProfile } from "./components/FormProfile";
import { db } from "@/lib/db";

export default async function ProfilePage() {
    const session = await getServerSession()

    if (!session?.user?.email) {
        redirect("/")
    }

    const userDb = await db.user.findUnique({
        where: {
            email: session?.user.email
        }
    })

    if (!userDb) {
        redirect('/')
    }

    return (
        <div>
            <h1 className="text-xl">Detalles de cuenta</h1>
            <FormProfile user={userDb} />
        </div>
    );
}