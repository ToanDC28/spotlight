import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.style.js";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notification"}>Visit to notification screen </Link>
    </View>
  );
}
