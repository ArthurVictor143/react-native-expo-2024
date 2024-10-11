import { BackHandler, Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/Auth";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function Page() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "super@gmail.com", password: "super123!" })
    } catch (error) {
      console.log(Error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Aplicativo pronto para usar</Text>
        <Button
          title="SignIn Super" onPress={handleEntrarSuper} />

        <Button
          title="SignIn ADM"
          onPress={() => signIn({ email: "adm@gmail.com", password: "ADM123!" })}
        />

        <Button
          title="SignIn User"
          onPress={() => signIn({ email: "user@gmail.com", password: "User123!" })}
        />

       
   <Button title="Sobre" onPress={()=>router.push("/about")}/>
       <Button title="Sair do aplicativo" onPress={()=>BackHandler.exitApp()}/>
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
    justifyContent:"center",
    gap:15,
    
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "light",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
