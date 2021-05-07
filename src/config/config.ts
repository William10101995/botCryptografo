import dotenv from 'dotenv'
dotenv.config();

export const configBinance = {
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET
}