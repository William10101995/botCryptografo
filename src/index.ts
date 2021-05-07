const Binance = require('node-binance-api');
import Twit from 'twit';

import * as config from './config/config';

const binance = new Binance().options(config.configBinance);



(async () => {
    var ticker = await binance.prices();
    console.log(ticker.BTCUSDT)
}

)();





