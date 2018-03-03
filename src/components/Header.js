import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import ListItem from '../Home/components/listItem';

import {DrawerNavigator} from 'react-navigation';

import firebase from 'react-native-firebase';

export default class Details extends React.Component {
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


                <View style={styles.menuButtonContainer}></View>
                <View style={styles.headerTextContainer}></View>
                <View style={styles.searchContainer}></View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },

    menuButtonContainer:{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '20%',
        backgroundColor: 'blue',





    },

    headerTextContainer:{
        flex: 1,
        backgroundColor: 'green',


    },

    searchContainer:{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '20%',
        backgroundColor: 'blue',


    },




});
