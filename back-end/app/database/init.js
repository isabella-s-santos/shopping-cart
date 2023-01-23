import mongoose from "mongoose";
import config from '../config/index.js';

const init = () => {
    mongoose.connect(
        `mongodb://${config.HOST}:${config.PORT}/${config.DB}`, {}
    );

    mongoose.connection.once(
        'error', () => console.log('Erro!')
    );
        
    mongoose.connection.once(
        'open', () => console.log('Conexão com o banco aberta!')
    );
};

export default init;
