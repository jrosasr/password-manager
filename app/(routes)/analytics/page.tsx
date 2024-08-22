import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { countPasswords } from "@/lib/countPasswords";
import { RepeatedPasswordChart } from "./components/RepeatedPasswordChart";
import { ViewAnalyticsChart } from "./components/ViewAnalyticsChart";
import { TrafficDevice } from "./components/TrafficDevice";

export default async function AnalyticsPage() {
  const session = await getServerSession();
    console.log(session?.user?.email);
    
  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      elements: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user || !user.elements) {
    redirect("/login");
  }
  
  const { unique , repeated } = countPasswords(user.elements)

  return (
    <div>
      <div className="gap-5 grid md:grid-cols-2 mb-4">
        <RepeatedPasswordChart repeated={repeated} unique={unique} />
        <ViewAnalyticsChart unique={unique} repeated={repeated} />
      </div>
      <div>
        <TrafficDevice />
      </div>
    </div>
  );
}
