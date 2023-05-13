import { Portfolio } from "@/components/works/Portfolio";
import { WorksProps } from "@/models/WorksProps";
import { GetStaticProps, NextPage } from "next";
import SidebarInfo from "../components/about/SidebarInfo";
import Header from "../components/header/Header";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Seo from "../components/seo/Seo";

export const getStaticProps: GetStaticProps<WorksProps> = async () => {
	return {
		props: WorksProps.parse({})
	};
};

const Works: NextPage<WorksProps> = (props) => {
	return (
		<section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
			<Seo pageTitle="Works" />

			<Header {...props.header} />

			<div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
				<div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
					<SidebarInfo {...props.sidebar} />
				</div>
				<div className="col-span-12 lg:col-span-8">
					<HeaderNavigation {...props.header} />

					<div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
						<div data-aos="fade">
							<div className="container mb-8   px-4 sm:px-5 md:px-10 lg:px-[60px]">
								<div className="py-12">
									<h2 className="after-effect after:left-48 mt-12 lg:mt-0">
										{props.main.header}
									</h2>
									<Portfolio {...props.main} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
