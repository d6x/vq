import HeroForm from "@/components/forms/HeroForm";

export default function Home() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-6">
        <h1 className="text-6xl font-bold">Your one link <br /> for everything</h1>
        <h2 className="text-slate-700 text-xl mt-4">Connect all of your socials and links in one place</h2>
        </div>
        <HeroForm />
      </section>
    </main>
  );
}
