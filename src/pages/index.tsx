import { HomeProps } from "@/models/HomeProps";
import { GetStaticProps, NextPage } from "next";
import Intro from "../components/about/Intro";
import SidebarInfo from "../components/about/SidebarInfo";
import Header from "../components/header/Header";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Seo from "../components/seo/Seo";
import { Skills } from "../components/service/Skills";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	// const header = await HeaderModel.get();
	return {
		props: HomeProps.parse({})
	};
};

const Home: NextPage<HomeProps> = (props) => {
	return (
		<section className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark  md:pb-16 w-full">
			<Seo {...props.seo} />

			<Header {...props.header} />

			<div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
				<div className="col-span-12 lg:col-span-4  lg:h-screen lg:sticky top-44">
					<SidebarInfo {...props.sidebar} />
				</div>

				<div className="col-span-12 lg:col-span-8 ">
					<HeaderNavigation {...props.header} />

					<div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
						<div data-aos="fade">
							<Intro {...props.main} />

							<section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
								<h3 className="text-[35px] dark:text-white font-medium pb-5">
									{props.main.skills.header}
								</h3>
								<div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
									<Skills {...props.main} />
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
