import { FC } from "react";
import { FontAwesome } from "@expo/vector-icons";

interface ChervonProps {
	open?: boolean;
}

const Chervon: FC<ChervonProps> = ({ open = false }) => {
	return (
		<FontAwesome
			name="chevron-right"
			size={16}
			style={{
				transform: [{ rotate: open ? "90deg" : "0deg" }],
				color: "#333333"
			}}
			color={open ? "#2BA7A8" : "#979797"}
		/>
	);
};

export default Chervon