import HeroForm from "@/components/forms/HeroForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {

  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-6">
        <h1 className="text-6xl font-bold">Your one link <br /> for everything</h1>
        <h2 className="text-slate-700 text-xl mt-4">Connect all of your socials and links in one place</h2>
        </div>
        <HeroForm user={session?.user} />
      </section>
    </main>
  );
}
