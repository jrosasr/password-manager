import { getServerSession } from "next-auth";
import { ImageAuth } from "./components/ImageAuth";
import TabsForms from "./components/TabsForms/TabsForms";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="grid md:grid-cols-2 h-full max-h-screen overflow-hidden">
      <div className="flex justify-center h-full">
        <div className="flex flex-col justify-center items-center mx-auto md:p-6 text-white">
          <h1 className="mb-5 text-blue-500 text-center text-xl md:text-2xl">
            JPassword Manager
          </h1>
          <h2 className="font-medium text-2xl text-black md:text-4xl">
            Bienvenido de nuevo
          </h2>
          <p className="mt-4 mb-6 text-center text-slate-400 text-sm">
            Bienvenido de nuevo, por favor ingresa tus datos.
          </p>
          <div className="p-4">
            <TabsForms />
          </div>
        </div>
      </div>
      <ImageAuth />
    </div>
  );
}
