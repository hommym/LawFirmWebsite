import { Link } from "react-router-dom";

export interface ILink {
	name: string;
	link: string;
}

const Breadcrumbs = ({ links }: { links: ILink[] }) => {
	return (
		<div className="flex gap-[2px]">
			{links?.map((link, index, arr) => (
				<Link to={link?.link} className="text-black flex font-poppins items-center gap-[2px] text-sm" key={index}>
					<p className={`${index !== arr.length - 1 ? "text-[#8f8f8f]" : "text-black"} font-medium font-poppins`}>{link?.name}</p>
					{index !== arr?.length - 1 && (
						<p>
							<span> &gt;&gt; </span>
						</p>
					)}
				</Link>
			))}
		</div>
	);
};

export default Breadcrumbs;
