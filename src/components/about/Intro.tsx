import { HomeProps } from "@/models/HomeProps";

const Intro = (props: HomeProps["main"]) => {
	return (
		<>
			<div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
				<h2 className="after-effect after:left-52">{props.about.header}</h2>

				<div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
					<div className="col-span-12 space-y-2.5">
						<div
							className="lg:mr-16 text-gray-lite  dark:text-color-910 leading-7 about-paragraph-container"
							dangerouslySetInnerHTML={{ __html: props.about.content }}
						/>
					</div>
				</div>
			</div>
			{/* End pt-12 */}
		</>
	);
};

export default Intro;
