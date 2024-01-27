import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-6">
        <h1 className="text-6xl font-bold">Your one link <br /> for everything</h1>
        <h2 className="text-slate-700 text-xl mt-4">Connect all of your socials and links in one place</h2>
        </div>
        <form className="pl-4 inline-flex items-center shadow-lg shadow-black/20 bg-white">
        <FontAwesomeIcon icon={faLink} className="text-blue-500"/>
          <span className="bg-white py-4 pl-4">vq.ie/</span>
          <input type="text" className="py-4" placeholder="username"/>
          <button type="submit" className="bg-blue-500 text-white py-4 px-6">Get Started</button>
        </form>
      </section>
    </main>
  );
}
