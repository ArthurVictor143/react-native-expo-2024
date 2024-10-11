import { router } from "expo-router";
import { Button, Text } from "react-native";
import { View } from "react-native";

export default function About() {
    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Sobre</Text>
        <Button title="Voltar" onPress={() => router.back()} />
    </View>
}