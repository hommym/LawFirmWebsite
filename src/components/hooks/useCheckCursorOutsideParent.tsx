/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

// Not used
const useCheckCursorOutsideParent = ({ parentRef, setShow }: { parentRef: any; setShow: any }) => {
	useEffect(() => {
		function checkCursor(e: any) {
			const parent = parentRef?.current;
			const target = e.target;

			if (parent.contains(target)) {
				console.log("TS");
			}
			// if cursor is outside close drop down with the useState hook it has
			if (!parent.contains(target)) {
				// Wait some some seconds before dispatching
				setShow(parent.contains(e.target));
			} else {
				return setShow(true);
			}
		}

		if (!parentRef?.current) return;

		window.addEventListener("mousemove", checkCursor);

		return () => {
			window.removeEventListener("mousemove", checkCursor);
		};
	}, [parentRef, setShow]);
};

export default useCheckCursorOutsideParent;
