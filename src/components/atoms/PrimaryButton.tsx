import { MdOutlineArrowOutward } from "react-icons/md";

interface IButton {
	text: string;
	sx?: string;
	textSx?: string;
}

const PrimaryButton = ({ text, sx = "", textSx = "" }: IButton) => {
	return (
		<button className={`${sx} px-10 py-4 rounded-[5px] bg-white text-black flex gap-2 items-center justify-center`}>
			<p className={`${textSx} text-black font-poppins`}>{text}</p>
			<span>
				<MdOutlineArrowOutward className={`${textSx} text-black text-xl"`} />
			</span>
		</button>
	);
};

export default PrimaryButton;
