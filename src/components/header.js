import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';


import {DrawerNavigator} from 'react-navigation';

import firebase from 'react-native-firebase';

export default class Header extends React.Component {
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
            <View style={styles.headerContainer}>

                <View style={styles.menuButtonContainer}>

                </View>

                <View style={styles.headerTextContainer}>


                </View>

                <View style={styles.searchButtonContainer}>


                </View>




            </View>
        );
    }



}

const styles = StyleSheet.create({
    headerContainer: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '8%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'center',

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

    searchButtonContainer:{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '20%',
        backgroundColor: 'red',

    },


});

