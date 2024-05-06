const PageDesc = ({ text }: { text: string }) => {
	return (
		<div className="w-full h-[50vh] lg:h-[75vh] bg-[red] flex items-center justify-center page_desc text-white">
			<h1 className="text-3xl md:text-5xl font-inria font-bold">{text}</h1>
		</div>
	);
};

export default PageDesc;
