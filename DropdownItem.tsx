import { FC, memo } from "react";
import {
	View,
	Text,
	Pressable,
	StyleSheet,
	PressableProps,
} from "react-native";

interface DropdownItemProps extends PressableProps {
	setSelected: (index: number) => void;
	selected: boolean;
	index: number;
}

const DropdownItem: FC<DropdownItemProps> = memo(
	({ selected, index, setSelected, ...props }) => {
		return (
			<Pressable
				onPress={() => setSelected(index)}
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.75 : 1,
						backgroundColor: selected
							? "rgba(240,118,16,0.1)"
							: "#F8F8F8",
					},
					styles.dropdownItem,
				]}
				{...props}
			>
				<Text
					numberOfLines={1}
					style={[
						{ color: selected ? "#F07610" : "#333333" },
						styles.dropdownItemName,
					]}
				>
					{/* 1231313123213213123131231232131312 */}
					{Math.round(Math.random() * 100)}
				</Text>
			</Pressable>
		);
	}
);

const styles = StyleSheet.create({
	dropdownItem: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		marginHorizontal: 10,
		marginVertical: 5,
	},
	dropdownItemName: {
		fontSize: 16,
	},
});

DropdownItem.displayName = "DropdownItem";
export default DropdownItem;
