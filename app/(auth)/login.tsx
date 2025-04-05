import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.log("Error logging in", error);
    }
  };
  return (
    <View style={styles.container}>
      {/* BRAND SECTION*/}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={40} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Spotlight</Text>
        <Text style={styles.tagline}>Find your favorite things</Text>
      </View>
      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("@/assets/images/auth_logo.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* LOGIN */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.8}
          onPress={handleLogin}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to Spotlight's{" "}
          <Text style={{ color: COLORS.primary }}>Terms of Service</Text> and{" "}
          <Text style={{ color: COLORS.primary }}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}
