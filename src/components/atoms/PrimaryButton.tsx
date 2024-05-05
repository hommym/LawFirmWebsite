interface IButton {
	text: string;
	sx?: string;
}

const PrimaryButton = ({ text, sx = "" }: IButton) => {
	return <button className={`${sx} px-6`}>{text}</button>;
};

export default PrimaryButton;
