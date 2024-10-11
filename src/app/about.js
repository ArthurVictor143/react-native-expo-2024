import { router } from "expo-router";
import { Button, Text } from "react-native";
import { View } from "react-native";

export default function About() {
    return <View><Text>
        About
        <Button title="Voltar" onPress={() => router.back()} />
    </Text></View>
}