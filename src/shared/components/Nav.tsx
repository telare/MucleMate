// "use client";
// import styles from "@shared/styles/components-styles/Nav.module.scss";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeBtn from "./buttons/ThemeBtn";
// import { usePathname, useRouter } from "next/navigation";
// import { useTheme } from "next-themes";
// import { UserProfileIcon } from "@/utils/icons/Icons";
// import Button from "./buttons/Button";
// import { useEffect, useState } from "react";

// type NavProps = {
//   userName: string;
// };

// export default function Nav({ userName }: NavProps) {
//   const pathname = usePathname();
//   const { theme } = useTheme();
//   const router = useRouter();
//   const [mounted, setMounted] = useState<boolean>(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (mounted) {
//     const linksTitles: string[] = ["Home", "Home", "Home"];
//     const linksSubtitles: string[] = ["1", "2", "3"];
//     return (
//       <nav className={styles.nav}>
//         <div className={styles.nav__LeftCon}>
//           <div className={styles.nav__LeftCon__LogoCon}>
//             <Button
//               iconPath={`/images/Logo${theme === "dark" ? "" : "-dark"}.png`}
//               type="button"
//               fnc={() => {
//                 router.push("/home");
//               }}
//             />
//           </div>
//           <div className={styles.nav__LeftCon__Greeting}>
//             <p>Hi, {userName}!</p>
//           </div>
//         </div>

//         <div className={styles.nav__MainCon}>
//           <div className={styles.nav__MainCon__LinksCon}>
//             <ul>
//               <li>
//                 <Link href={"/home"}>Home</Link>
//               </li>
//               <li>
//                 <Link href={"/workouts"}>Workouts</Link>
//                 <ul>
//                   <li>
//                     <Link href={"/workouts"}>For Men</Link>
//                   </li>
//                   <li>
//                     <Link href={"/workouts"}>For Women</Link>
//                   </li>
//                   <li>
//                     <Link href={"/workouts"}>All</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link href={"/nutrition"}>Nutrition</Link>
//               </li>
//               <li>
//                 <Link href={"/ai"}>AI</Link>
//               </li>
//             </ul>
//           </div>
//           <div className={styles.nav__MainCon__BtnsCon}>
//             <ThemeBtn />
//             <Button
//               icon={UserProfileIcon}
//               style={styles.nav__MainCon__BtnsCon__Btn}
//               type="button"
//               fnc={() => {
//                 router.push("/account");
//               }}
//             />
//           </div>
//         </div>
//       </nav>
//     );
//   }
//   return null;
// }
