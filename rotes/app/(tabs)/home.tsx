import {View, Text, Button, StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';

export default function HomeScreen(){
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Ir para a página" onPress={() => router.push('./about')} color="#1F511E"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    title:{
        fontSize: 28,
        color: '#86FF84',
        marginBottom: 20,
        fontFamily: 'Inter',
    },
})