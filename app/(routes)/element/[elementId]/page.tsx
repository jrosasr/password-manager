import { FormEditElement } from "@/components/Shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ElementPage({
  params,
}: {
  params: { elementId: string };
}) {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/login");
  }
  const element = await db.element.findUnique({
    where: {
      id: params.elementId,
    },
  });

  if (!element) {
    return redirect("/");
  }

  return (
    <>
      <div>
        <h1>Element page</h1>
        <div>
            <FormEditElement dataElement={element} />
        </div>
      </div>
    </>
  );
}
