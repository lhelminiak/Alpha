import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import NewTrade from './components/NewTrade'

import firebase from 'react-native-firebase';

export default class InputScreen extends React.Component {
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
                <NewTrade/>


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

