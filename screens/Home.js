import React from 'react';
import {View , Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    return (
        <TouchableOpacity onPress= {() => {
            navigation.navigate('ColorPalette')
        }}>


        <View>
            <Text>Hello world</Text>



        </View>
        </TouchableOpacity>

    )
}
export default Home;