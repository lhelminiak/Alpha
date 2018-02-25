import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import firebase from 'react-native-firebase';
export default class ListItem extends React.Component {



    constructor() {
        super();
        this.state = {
            active: false,
            tradeResult: true,
            ticker: '',
            tradeDate: '',
            tradeNote: '',
            tradePosition: '',
        };
    }

    componentDidMount() {

    }

    componentWillMount() {


    }

    render() {

        const upArrow = (<Icon style={styles.indicatorIcon} name="arrow-up" size={30} color="white"/>);
        const downArrow = (<Icon style={styles.indicatorIcon} name="arrow-down" size={30} color="white" />);
        const openOrderIcon = (<Icon style={styles.indicatorIcon} name="minus" size={40} color="white" />);
        const evenIcon = (<Icon style={[styles.indicatorIcon, styles.evenIcon]} name="controller-paus" size={30} color="white"/>);
        const rightArrow = (<Icon style={styles.rightArrow} name="chevron-small-right" size={20}/>);

        return (
            <View style={styles.listItem}>

                <View style={styles.itemIndicatorContainer}>
                    <View style={[styles.indicator, styles.openTradeIndicator]}>
                        {evenIcon}
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
                    {rightArrow}
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
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        paddingTop: '2%',
        paddingBottom: '2%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    openTradeIndicator: {
        backgroundColor: '#cccccc',
        borderColor: '#cccccc'
    },
    profitTradeIndicator: {
        backgroundColor: '#21CE99',
        borderColor: '#21CE99'
    },
    lossTradeIndicator: {
        backgroundColor: '#F2522E',
        borderColor: '#F2522E'
    },
    evenTradeIndicator: {
        backgroundColor: '#cccccc',
        borderColor: '#cccccc'
    },

    indicatorIcon:{
        alignSelf: 'center',

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

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',


    },

    rightArrow: {
        color: '#03A9F4'

    },

    // evenIconContainer:{
    //
    //     display: 'flex',
    //     flexDirection: 'column',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignContent: 'center',
    //     backgroundColor: 'black',
    //
    //
    // },
    //
    // evenIconChild:{
    //     flex: 1,
    //     alignSelf: 'center',
    //     marginTop: 0,
    //     marginBottom: 0,
    //
    //
    // }

    evenIcon: {
        transform: [
            {rotate: '90deg'},
            {translateY: 1}, // Need to make responsive

        ],
    },











});
