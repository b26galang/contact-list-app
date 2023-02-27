import { View, Text, Button, Linking, StyleSheet } from 'react-native';
import { Props } from '../types';

export default function ProfileScreen({ navigation, route }: Props["contact"]) {

    return (<View>

        <Text style={styles.text}>{route.params.contactName}</Text>
        <Button title="Send Email" onPress={() => Linking.openURL("mailto: support@expo.io?subject=hello&body=Goodbye")} />
        <Button title="Send Text" onPress={() => Linking.openURL("sms:+11111")} />

    </View>)
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }
})