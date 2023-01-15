import config from './../config/config';
import app from './express';
import mongoose from 'mongoose'

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s', config.port)
})

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true,
                                    useCreateIndex: true,
                                    useUnifiedTopoly: true })
mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${mongoUri}`)
})

