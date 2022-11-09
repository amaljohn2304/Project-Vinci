import React from 'react';
import {View, StyleSheet,Text,Button,Image} from 'react-native';


const Sample1 = ({ navigation }) => {
    return (
        <View style={{flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}>
            <Image source = {{uri:'data:image/jpeg;base64,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'}}style = {{ width: 200, height: 200 }}
/>
            <Button
        title="Go to Login"
        onPress={() => navigation.navigate('login')}
        />
            <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sample1;

