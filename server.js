#!/usr/bin/env node

import { rps, rpsls } from './lib/rpsls.js';
import minimist from 'minimist';
import express from 'express';

var argv = minimist(process.argv.slice(2));
var app = express();
const port = argv.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Default
app.get('/app', (req, res)=>{
    res.status(200).send("200 OK");
});
//RPS
app.get('/app/rps', (req, res) =>{
    res.status(200).send(JSON.stringify(rps()));
});
//rpsls
app.get('/app/rpsls', (req, res) =>{
    res.status(200).send(JSON.stringify(rpsls()));
});
//rps shot
app.get('/app/rps/play/', (req, res)=>{
    res.status(200).send(rps(req.query.shot));
});
//rpsls shot
app.get('/app/rpsls/play/', (req, res)=>{
    res.status(200).send(rpsls(req.query.shot));
});
//rps POST request
app.post('/app/rps/play/', (req, res)=>{
    res.status(200).send(rps(req.body.shot));
});
//rpsls POST request
app.post('/app/rpsls/play/', (req, res)=>{
    res.status(200).send(rpsls(req.body.shot));
});
//rps URL
app.get('/app/rps/play/:shot/', (req, res)=>{
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});
//rpsls URL
app.get('/app/rpsls/play/:shot/', (req, res)=>{
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});
//404 Not Found
app.get('*', (req, res)=> {
    res.status(404).send('404 NOT FOUND');
});
//Start server, listen to argport
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});