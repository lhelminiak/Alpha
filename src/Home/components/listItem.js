import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

import firebase from 'react-native-firebase';
export default class ListItem extends React.Component {

    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.listItem}>
                <View style={styles.itemIndicatorContainer}>
                    <Text>{this.props.title}</Text>

                </View>

                <View style={styles.itemInfoContainer}>

                </View>

                <View style={styles.itemButtonContainer}>

                </View>




            </View>
        );

    }
}

const styles = StyleSheet.create({

    listItem: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start'
    },

    itemIndicatorContainer: {
        flex: 1,
        alignSelf: 'auto',
        backgroundColor: 'white',

    },

    itemInfoContainer: {
        flex: 1,
        alignSelf: 'auto',
        backgroundColor: 'red',
    },

    itemButtonContainer: {
        flex: 1,
        alignSelf: 'auto',
        backgroundColor: 'green'
    }







});
