import { useEffect, useState } from "react";

import Header from "../../components/molecules/Header";
import PageDesc from "../../components/molecules/PageDesc";
// import { ILink } from "../../components/molecules/Breadcrumbs";

import { articlesData } from "../../data/articles";
import { useParams } from "react-router-dom";

// const links: ILink[] = [
// 	{
// 		name: "Home",
// 		link: "/",
// 	},
// 	{
// 		name: "Our Expertise",
// 		link: "/expertise",
// 	},
// ];

const SingleExpertise = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [expertise, setExpertise] = useState<any>({});
	const { slugname } = useParams();

	useEffect(() => {
		const ex = articlesData.find((article) => article.slugname.toLowerCase() === slugname?.toLowerCase());
		setExpertise(ex);
	}, [slugname]);
	return (
		<div className="w-full min-h-screen">
			<Header isTransparent={true} />
			<PageDesc text={expertise?.mainTopic} />

			<main className="w-full gap-4 h-auto flex items-stretch justify-between max-w-6xl mx-auto py-12">
				<article className="w-2/3 h-full ">
					<h3 className="w-full border-b-[1px] py-3 font-poppins text-3xl font-semibold">{expertise?.subTopic}</h3>

					<div dangerouslySetInnerHTML={{ __html: expertise?.article }} className="py-4 text-editor"></div>
				</article>
				<article className="w-1/3 bg-[red] h-full"></article>
			</main>
		</div>
	);
};

export default SingleExpertise;
