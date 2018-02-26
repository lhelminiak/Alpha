import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import firebase from 'react-native-firebase';
export default class ListItem extends React.Component {



    constructor() {
        super();
        this.state = {
            active: false,
            gain: true,

        };
    }

    componentDidMount() {

    }

    componentWillMount() {


    }

    render() {

        // const upArrow = (<Icon style={styles.indicatorIcon} name="arrow-up" size={30} color="white"/>);
        // const downArrow = (<Icon style={styles.indicatorIcon} name="arrow-down" size={30} color="white" />);
        // const openOrderIcon = (<Icon style={styles.indicatorIcon} name="minus" size={40} color="white" />);
        // const evenIcon = (<Icon style={[styles.indicatorIcon, styles.evenIcon]} name="controller-paus" size={30} color="white"/>);
        // const rightArrow = (<Icon style={styles.rightArrow} name="chevron-small-right" size={20}/>);

        return (


            <View style={styles.itemIndicatorContainer}>





                <View style={this.state.gain === true ? styles.profitTradeIndicator : styles.lossTradeIndicator}>


                </View>

                <View style={[styles.indicator, styles.openTradeIndicator]}>
                    {evenIcon}
                </View>

            </View>







        );

    }
}

const styles = StyleSheet.create({


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

    indicatorIcon: {
        alignSelf: 'center',

    },


});

