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
                    <View style={[styles.indicator, styles.profitTradeIndicator]}>

                    </View>

                </View>



                <View style={styles.itemInfoContainer}>
                    <View style={styles.itemInfoTop}>
                        <Text style={styles.tickerSymbol}>AAPL</Text>
                        <Text style={styles.tradeDate}> Today 12:00 PM</Text>
                    </View>

                    <View style={styles.itemInfoBottom}>
                        <View style={styles.tradeNotePreviewContainer}>
                            <Text style={styles.tradeNotePreview} numberOfLines={1} ellipsizeMode="tail">Waiting for trend to reverse before exiting</Text>
                        </View>

                        <View style={styles.tradePositionContainer}>
                            <Text style={styles.tradePosition}>Long</Text>
                        </View>


                    </View>

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
        alignContent: 'flex-start',
        height: 60,
    },

    itemIndicatorContainer: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '20%',
        alignSelf: 'auto',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',

    },

    indicator: {
        height: '100%',
        width: '60%',
        borderRadius: 50,
        paddingTop: '2%',
        paddingBottom: '2%',

    },
    openTradeIndicator: {
        backgroundColor: '#cccccc',
    },
    profitTradeIndicator: {
        backgroundColor: '#21CE99',
    },
    lossTradeIndicator: {
        backgroundColor: '#F2522E',
    },
    evenTradeIndicator: {
        backgroundColor: '#cccccc',
    },



    itemInfoContainer: {
        flex: 1,
        alignSelf: 'auto',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',


    },

    itemInfoTop: {
        flex: 1,
        alignSelf: 'auto',
        position: 'relative',


    },

    tickerSymbol:{
        fontSize: 20,
        fontWeight: '700',
        position: 'absolute',
        left: 1,
        top: 2,
    },

    tradeDate: {
        fontSize: 12,
        position: 'absolute',
        right: 3,
        top: 2,
        color: '#9b9b9b',
    },

    itemInfoBottom:{
        flex: 1,
        alignSelf: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

    },

    tradeNotePreviewContainer:{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '75%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    tradeNotePreview:{
        color: '#9b9b9b',
    },

    tradePositionContainer:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    tradePosition:{
        color: '#9b9b9b',
    },



    itemButtonContainer: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '5%',
        alignSelf: 'auto',
        backgroundColor: '#f5f5f5',

    },







});
