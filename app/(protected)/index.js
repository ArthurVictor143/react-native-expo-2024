import { Button, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Button title="Sair" onPress={() => signOut()} />     
                
               <Text>Home</Text>
        </View>
    );
}
