import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';

const alpha = require('alphavantage')({ key: '3RQJPGEBBHW150TE' });


alpha.data.intraday(`msft`).then(data => {
    console.log(data);
})

alpha.data.batch([`msft`, `aapl`]).then(data => {
    console.log(data);
})

alpha.forex.rate('btc', 'usd').then(data => {
    console.log(data);
})

alpha.crypto.intraday('btc', 'usd').then(data => {
    console.log(data);
})

alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
    console.log(data);
})

alpha.performance.sector().then(data => {
    console.log(data);
});

export default class AlphaVantageAPI extends React.Component {
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
