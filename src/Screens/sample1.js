import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const Sample1 = ({ navigation }) => {
    return (
        <View style={{flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}>
            <Text >Sample1</Text>
            <Button
        title="Go to Sample2"
        onPress={() => navigation.navigate('Sample2')
    }
    styles={{marginTop:40}}
    />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sample1;

