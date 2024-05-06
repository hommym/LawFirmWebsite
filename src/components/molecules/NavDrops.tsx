import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FiChevronDown } from "react-icons/fi";
import useCheckCursorOutsideParent from "../hooks/useCheckCursorOutsideParent";

interface IDropDown {
	name: string;
	isActive?: boolean;
	sub: {
		name: string;
		link: string;
	}[];
}

const DropDown = ({ name, sub, isActive }: IDropDown) => {
	const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const parentRef = useRef<any>(null);

	useCheckCursorOutsideParent({ parentRef, setShow: setShowSolutionDropdown });
	return (
		<div className="h-auto flex items-center justify-center" ref={parentRef}>
			<div className={`relative ${showSolutionDropdown ? " md:rounded-full overflow-hidden md:overflow-visible" : ""}`}>
				<button className="flex group items-center gap-[3px] justify-between">
					<p className={`${isActive ? "text-sec" : "text-white group-hover:text-sec"}  font-poppins text-sm"`}>{name}</p>
					<FiChevronDown className={`${isActive ? "text-sec" : "group-hover:text-sec text-white"}`} />
				</button>
				{showSolutionDropdown && (
					<>
						<div className="absolute top-[150%] flex flex-col items-start justify-start -left-[10px] w-auto min-w-[150px] h-auto p-3 bg-sec2">
							{sub?.map((s, index) => (
								<Link to={s?.link} className="flex text-[13px] w-full justify-start rounded-[5px] hover:bg-black/50 p-2" key={index}>
									{s?.name}
								</Link>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default DropDown;
