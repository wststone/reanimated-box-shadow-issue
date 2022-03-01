import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Animated, { Layout } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Dropdown from "./Dropdown";

const DROP_DOWNS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function App() {
	return (
		<SafeAreaView>
			<Animated.ScrollView layout={Layout} style={styles.container}>
				{DROP_DOWNS.map(({ id }) => (
					<Dropdown key={id} />
				))}
				<StatusBar style="auto" />
			</Animated.ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
		marginHorizontal: 5,
	},
});
