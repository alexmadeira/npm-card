#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const card = fs.readFileSync(path.join(__dirname, 'card'), 'utf8')

console.log(card)

