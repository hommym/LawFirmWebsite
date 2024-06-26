import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

interface IButton {
	text: string;
	sx?: string;
	textSx?: string;
	href?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleClick?: (e: any) => void;
}

const PrimaryButton = ({ text, sx = "", textSx = "", href, handleClick }: IButton) => {
	const styles = `${sx} px-10 hover:opacity-90 py-4 rounded-[5px] bg-white text-black inline-flex gap-2 items-center justify-center`;
	return (
		<>
			{!href && (
				<button className={`${styles}`} onClick={(e) => (handleClick ? handleClick(e) : "")}>
					<p className={`${textSx} text-black font-poppins`}>{text}</p>
					<span>
						<MdOutlineArrowOutward className={`${textSx} text-black text-xl"`} />
					</span>
				</button>
			)}

			{href && (
				<Link to={href} className={styles}>
					<p className={`${textSx} text-black font-poppins`}>{text}</p>
					<span>
						<MdOutlineArrowOutward className={`${textSx} text-black text-xl"`} />
					</span>
				</Link>
			)}
		</>
	);
};

export default PrimaryButton;
