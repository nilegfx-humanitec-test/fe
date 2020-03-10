const express = require('express');
const {join} = require('path');
const FE_PORT = process.env.FE_PORT || 4040;

express()
  .use(express.static(join(__dirname, 'public')))
  .listen(FE_PORT, () => {
    console.log(`http://localhost:${FE_PORT}`);
  });
