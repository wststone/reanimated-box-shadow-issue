import { FC, useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Animated, { FadeInUp, FadeOutUp, Layout } from "react-native-reanimated";
import Chervon from "./Chervon";
import DropdownItem from "./DropdownItem";
import { AnimatePresence } from "moti";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Dropdown: FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [selected, _setSelected_] = useState<number | null>(null);
	const setSelected = useCallback(
		(index: number) => _setSelected_(index),
		[]
	);

	return (
		<Animated.View layout={Layout} style={styles.dropdownWrapper}>
			<Pressable onPress={() => setOpen(o => !o)}>
				<Animated.View
					layout={Layout}
					accessibilityRole="menubar"
					aria-haspopup
					style={styles.dropdownTab}
				>
					<Text style={styles.dropdownTabTitle}>
						{Math.round(Math.random() * 100)}
					</Text>
					<Chervon open={open} />
				</Animated.View>
			</Pressable>
			{/* <TouchableWithoutFeedback></TouchableWithoutFeedback> */}
			<AnimatePresence>
				{open && (
					<Animated.View
						entering={FadeInUp}
						exiting={FadeOutUp}
						layout={Layout}
					>
						<Animated.View collapsable={false}>
							{items.map((i, index) => (
								<DropdownItem
									key={i.id}
									selected={selected === index}
									index={index}
									setSelected={setSelected}
								/>
							))}
						</Animated.View>
					</Animated.View>
				)}
			</AnimatePresence>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	dropdownWrapper: {
		paddingVertical: 2,
		paddingHorizontal: 10,
		backgroundColor: "white",
		marginVertical: 5,
		borderRadius: 10,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1,
		shadowColor: "#000",
		elevation: 1,
	},
	dropdownTab: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		borderRadius: 10,
		marginHorizontal: 10,
		marginVertical: 5,
	},
	dropdownTabTitle: {
		fontSize: 18,
		fontWeight: "500",
	},
});

export default Dropdown;
