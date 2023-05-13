import { ResumeProps } from "@/models/ResumeProps";
import { GetStaticProps, NextPage } from "next";
import { ResumeSections } from "../components/Resume/ResumeCard";
import SidebarInfo from "../components/about/SidebarInfo";
import Header from "../components/header/Header";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Seo from "../components/seo/Seo";

export const getStaticProps: GetStaticProps<ResumeProps> = async () => {
	return {
		props: ResumeProps.parse({})
	};
};

const Resume: NextPage<ResumeProps> = (props) => {
	return (
		<section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
			<Seo {...props.seo} />

			<Header {...props.header} />

			<div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
				<div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
					<SidebarInfo {...props.sidebar} />
				</div>
				<div className="col-span-12 lg:col-span-8">
					<HeaderNavigation {...props.header} />

					<div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
						<div data-aos="fade">
							<div className="container px-4 sm:px-5 md:px-10 lg:px-14">
								<div className="py-12">
									<h2 className="after-effect after:left-44">
										{props.main.header}
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
										<ResumeSections {...props.main} />
									</div>
								</div>
							</div>
						</div>
						{/* End fade */}
					</div>
					{/* End common-wrap */}
				</div>
			</div>
			{/* End main continer */}
		</section>
	);
};

export default Resume;
