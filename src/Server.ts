import * as express from 'express';
import * as bodyParser from 'body-parser';
class Server{
    public app;
    constructor(private config){
        this.app = express();
    }

    bootStrap(){
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }

    setupRoutes(){
        const {app} = this;
        app.get('/health-check',(req,res)=>{
            res.send('I am OK')
        })

        
    }

    initBodyParser(){
        this.app.use(bodyParser.json());
    }

    run(){
        const {app, config: {port}} = this;
        app.listen(port,(err)=> {
            if(err){
                console.log(err);
            }
            console.log('Success !!!')
        })
        return this;
    }
}

export default Server;