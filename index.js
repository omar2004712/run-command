#!/usr/bin/env node

//g++ required

const {spawn} = require('child_process')
const fs = require('fs');
const fileName = process.argv[2];

const run = async fileName => {
    try {
        await fs.promises.access(fileName)
    } catch (err) {
        throw new Error('file does not exist');
    }
    spawn('g++', [fileName], {stdio: "inherit"});
    try {
        spawn('./a.exe', [], {stdio:'inherit'}); //linux or macOS
    } catch (err) {
        spawn('a.exe') // windows
    }
}

run(fileName);