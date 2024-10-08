import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../src/hooks/Auth";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  const { signIn, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Aplicativo pronto para usar</Text>
        <Button
          title="SignIn Super"
          onPress={() => signIn({ email: "super@gmail.com", password: "super123!" })}
        />

        <Button
          title="SignIn ADM"
          onPress={() => signIn({ email: "adm@gmail.com", password: "ADM123!" })}
        />

        <Button
          title="SignIn User"
          onPress={() => signIn({ email: "user@gmail.com", password: "User123!" })}
        />

        <Button
          title="SignOut"
          onPress={() => signOut()}
        />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Corrigido para '#fff'
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "light",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
