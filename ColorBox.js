import React from 'react';
import {View ,Text , SafeAreaView , StyleSheet} from 'react-native';

const Colorbox = ({colorName,hexCode}) => {
    const colorStyle = {
        backgroundColor: hexCode,
    };
    return (
        <SafeAreaView>
            <View style={[styles.box,colorStyle]}>
                <Text style={[styles.text]}>
                    {colorName}: {hexCode }
                </Text>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1,
        marginHorizontal: 17

        
    },
    text: {
        color: 'white',
        fontWeight: 'bold'

    }


})
export default Colorbox;