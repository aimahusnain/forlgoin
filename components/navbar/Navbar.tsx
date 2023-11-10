"use client";

// import Link from "next/link";
// import Logo from "./logo";
// import ThemeToggler from "../theme";
// export default function Navbar({ currentUser }: UserMenuProps) {
//   const theme = "dark";

//   return (
//     <header>
//       <nav className="bg-gray-100 flex justify-between px-20 py-4 w-full">

//         <div className="font-semibold font-sans text-[25px]">

//           {currentUser ? (
//             <span>
//               Hello,{" "}
//               <span className="text-emerald-500">{currentUser?.name}</span>
//             </span>
//           ) : (
//             <span>Hello, Welcome!!!!</span>
//           )}

//         </div>

//         <div className="flex gap-4 items-center border-[1px] justify-center rounded-full py-3 px-7">
//           <Link href="/">Home</Link>
//           <Link href={currentUser ? `/create` : `/register`}>Create</Link>
//           {currentUser ? (
//             <button onClick={() => signOut()}>Sign out</button>
//           ) : (
//             <Link href="/register">Register</Link>
//           )}
//         </div>
//         <ThemeToggler />
//       </nav>
//     </header>
//   );
// }

import { SafeUser } from "@/types/type";
import { siteDetails } from "@/utils";
import { SiteDetails } from "@/utils/types";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../button";
import ThemeToggler from "../theme";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

export default function Header({ currentUser }: UserMenuProps) {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const linksClassname =
    "flex py-2 text-lg font-sans font-semibold text-black group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0";
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
        ${
          sticky
          ? "!fixed !z-[9999] !transition bg-gradient-to-b from-white/40 dark:from-black via-indigo-700 to-transparent"
          : "absolute"
        }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href={"/"}
                className={`text-[30px] font-extrabold cursor-pointer block w-full
                    ${sticky ? "py-5 lg:py-2" : "py-8"}
                    `}
              >
                {siteDetails.map((item: SiteDetails) => (
                  <div>{item.name}</div>
                ))}
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
                        `}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 
                px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

                ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }
                `}
                >
                  <ul className=" lg:ml-[60%] block lg:flex lg:space-x-12">
                    <Link href="/" className={linksClassname}>
                      Home
                    </Link>

                    <Link className={linksClassname} href="/blogs">
                      Blogs
                    </Link>

                    <Link className={linksClassname} href="/category">
                      Category
                    </Link>

                    <div className="lg:hidden xl:hidden md:hidden sm:flex sm:gap-3 xs:gap-3 sm:flex-row xs:flex-row xs:flex">
                      {currentUser !== null ? (
                        <Link
                          href="/create"
                          className="rounded-md bg-primary mt-2 py-2 px-5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                          Create
                        </Link>
                      ) : null}

                      {currentUser ? (
                        <button
                          className="rounded-md bg-primary mt-2 py-2 px-5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                          onClick={() => signOut()}
                        >
                          Signout
                        </button>
                      ) : (
                        <Link
                          className="rounded-md bg-primary mt-2 py-2 px-5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                          href="/register"
                        >
                          Register
                        </Link>
                      )}
                    </div>
                  </ul>
                </nav>
              </div>
              <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0 md:flex xs:hidden sm:hidden">
                <div className="flex gap-3 items-center">
                  <ThemeToggler />
                </div>
                {currentUser !== null ? (
                  <Button onClick={() => {}} text="Create" />
                ) : null}
                {/* <Button onClick={session !== null ? ()=> signOut() :  () => signIn()} text={session !== null ? "Logout" : "Register"} /> */}

                {currentUser ? (
                  <Button onClick={() => signOut()} text="Signout" />
                ) : (
                  <Link
                    className="rounded-md bg-primary py-3 px-7 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    href="/register"
                  >
                    Register
                  </Link>
                )}

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
