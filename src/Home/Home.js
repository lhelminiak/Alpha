import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';


// Screens
import TradeList from './components/tradeList';

import {DrawerNavigator} from 'react-navigation';

import firebase from 'react-native-firebase';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            // firebase things?
        };
    }

    componentDidMount() {
        // firebase things?
    }

    render() {
        return (
            <View style={styles.container}>
                <TradeList/>
            </View>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

