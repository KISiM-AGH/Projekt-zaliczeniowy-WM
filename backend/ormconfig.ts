import {ConnectionOptions} from 'typeorm'
//import {SnakeNamingStrategy} from 'typeorm-naming-strategies'
import ProcessEnv = NodeJS.ProcessEnv


const config: ConnectionOptions = {
    type: 'mysql',
    database: "gamedatabase",
    synchronize: true,
    logging: true,
    entities: ['orm/entities/**/*.ts'],
    username: 'gamedatabase',
    password: ''

}


export default config