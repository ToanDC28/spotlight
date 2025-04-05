import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache';

const publishKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!publishKey) {
  throw new Error("Missing public key. Please sey clerk key");
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
