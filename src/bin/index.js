#!/usr/bin/env node

var app = require('../app');

app.listen(3001,()=>{
  console.log(`Server listening on port 3001`)
})