import { Inter } from "next/font/google";
import "../globals.css";
import {getServerSession} from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChartLine, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import SideLogoutButton from "@/components/buttons/SideLogoutButton";
import AppSidebar from "@/components/layout/AppSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AppTemplate({ children }) {

  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/');
  }


  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
            <aside className="bg-white w-48 p-4 shadow">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
                <Image src={session.user.image} width={256} height={256} alt={'profile image'} />
            </div>
            <div className="text-center">
              <AppSidebar />
            </div>
            </aside>
          <div className="grow">
            <div className="bg-white m-8 p-4 shadow rounded-2">
                {children}
            </div>

          </div>
        </main>
      </body>
    </html>
  );
}