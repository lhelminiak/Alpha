import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import ListItem from './listItem';



import firebase from 'react-native-firebase';
export default class TradeList extends React.Component {

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

                <SectionList
                    // sections={[
                    //     {title: 'Open Trades', data: ['Hey Look']},
                    //     {title: 'Closed Trades', data: ['Alyssa', 'Brooke', 'Rachel', 'Margaret', 'Mia?', 'Some girl named Carley somewhere', 'Gabby Pinto',
                    //             'Morgan cant forget her too', 'Never Marta tho thats weird',
                    //             'Alexa Ostrega', 'Sorry I typed all this love you' ]},
                    // ]}

                    sections={[
                        {title: 'Open Trades', data: [
                                {id: 1, tickerSymbol: 'AAPL', tradeDate: 'Today 12:00 PM', tradeNote: 'Waiting for Trend to Reverse filll up this mothafuckin textarea', tradePosition: 'Long'},
                                {id: 2, tickerSymbol: 'TSLA', tradeDate: 'Yesterday 11:00 AM', tradeNote: 'Waiting for something to happen', tradePosition: 'Short'},
                                {id: 3, tickerSymbol: 'AMZN', tradeDate: 'Tuesday 1:00 PM', tradeNote: 'Waiting for Trend to Reverse', tradePosition: 'Long'},
                            ]},
                        {title: 'Closed Trades', data: [
                                {id: 1, tickerSymbol: 'USD/CAD', tradeDate: 'Today 2:00 PM', tradeNote: 'Fuck the canadian dollar', tradePosition: 'Long'},
                                {id: 2, tickerSymbol: 'TSLA', tradeDate: 'Yesterday 3:00 PM', tradeNote: 'Swing Trade', tradePosition: 'Short'},
                                {id: 3, tickerSymbol: 'NVDA', tradeDate: 'Tuesday 1:00 PM', tradeNote: 'Crypto is making me money', tradePosition: 'Long'},

                            ]}



                    ]}

                    refreshing={true}
                    onRefresh={() => this.onRefresh()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={({separator}) =>
                        <View style={styles.separator}>{separator}
                        </View>}
                    renderItem={({item}) =>
                        <ListItem
                            tickerSymbol={item.tickerSymbol}
                            tradeDate={item.tradeDate}
                            tradeNote={item.tradeNote}
                            tradePosition={item.tradePosition}/>}

                    renderSectionHeader={({section}) =>
                        <Text style={styles.sectionHeader}>{section.title}
                        </Text>}
                    keyExtractor={(item, index) => index}

                />

            </View>
        );

    }
}

const styles = StyleSheet.create({

    // container: {
    //     display: 'flex',
    //     flexDirection: "column",
    //     flexWrap: 'nowrap',
    //     justifyContent: 'flex-start',
    //     alignItems: 'stretch',
    //     alignContent:'flex-start',
    //
    // },
    //
    // sectionHeader: {
    //
    //     flex: 1,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'nowrap',
    //     justifyContent: 'flex-start',
    //     fontSize: 18,
    //     fontWeight: '200',
    //     color: 'white',
    //     backgroundColor: '#03a9f4'
    //
    //
    // },
    // separator: {
    //     height: 0.5,
    //     backgroundColor: '#65c3cc'
    //
    // },
    //
    //
    // item: {
    //     flex: 2,
    // },






    container: {
        flex: 1,
        width: '100%'
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        backgroundColor: '#03a9f4',
        paddingLeft: '5%',
        paddingTop: '2%',
        paddingBottom: '2%'


    },

    separator: {
        height: 0.5,
        backgroundColor: '#65c3cc'

    },


    // item: {
    //     padding: 10,
    //     fontSize: 18,
    //     height: 44,
    // },
});
