#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

var args = minimist(process.argv.slice(2));
var app = express();
const port = args.port || 5000;

