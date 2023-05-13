import { HomeProps } from "@/models/HomeProps";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { isActiveLink } from "../../utilis/linkActiveChecker";

const HeaderNavigation = (props: HomeProps["header"]) => {
	const [menuOpen] = useState(false);
	const router = useRouter();

	return (
		<header className="lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#111111] ">
			{/* menu for mobile devices*/}
			<nav className={`${menuOpen ? "block mx-auto" : "hidden lg:block"}`}>
				<ul
					className={`${
						menuOpen
							? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]"
							: "flex "
					}`}
				>
					{props.menu.map((item) => (
						<Link
							key={item.id}
							className={`${
								isActiveLink(item.routePath, router.asPath)
									? "w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
									: "w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
							} `}
							href={item.routePath}
						>
							<span className="flex-shrink-0 text-xl mb-1 hidden dark:flex">
								<img src={item.iconDark.src} alt={item.iconDark.alt} />
							</span>
							<span className="flex-shrink-0 text-xl mb-1 dark:hidden flex">
								<img src={item.iconLight.src} alt={item.iconLight.alt} />
							</span>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default HeaderNavigation;
