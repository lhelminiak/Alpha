import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';


// Screens
import TradeList from './components/tradeList';

// Components
import Header from '../components/Header';

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

                <View style={styles.headerContainer}>
                    <Header/>


                </View>


                <View style={styles.overviewContainer}>

                </View>

                <View style={styles.listContainer}>


                </View>



                <TradeList/>

            </View>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },

    headerContainer:{
        marginTop: '5%',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '7%',


    },

    overviewContainer:{
        flex: 1,




    },

    listContainer:{
        flex: 1,
        


    },


});

