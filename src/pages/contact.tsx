import { ContactProps } from "@/models/ContactProps";
import { GetStaticProps, NextPage } from "next";
import SidebarInfo from "../components/about/SidebarInfo";
import { Address } from "../components/contact/Address";
import Header from "../components/header/Header";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Seo from "../components/seo/Seo";

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
	return {
		props: ContactProps.parse({})
	};
};

const Contact: NextPage<ContactProps> = (props) => {
	return (
		<section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
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
							<div className="container mb-8  px-4 sm:px-5 md:px-10 lg:px-[60px]">
								<div className="py-12">
									<h2 className="after-effect after:left-48 mt-12  lg:mt-0 mb-12 md:mb-[30px]">
										{props.main.header}
									</h2>
									<div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
										<Address {...props.main} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
