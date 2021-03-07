
const express = require('express');
const path = require('path');
const { Z_ASCII } = require('zlib');
const PORT = process.env.PORT || 5000;
const app = express();
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.get('/rate', function(req, res) {
    let weight = Number(req.query.weight);
    let type = req.query.type;
    let rate = calculateRate (weight, type);
    res.render('pages/rate', {
      rate: rate
    } );
  } );
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  function calculateRate(weight, type){
    switch (type) {
      case 'stampedLetter':
        return stampedLetter(weight);
      case 'meteredLetter':
        return meteredLetter(weight);
      case 'largeEnvelope':
        return largeEnvelope(weight);
      case 'packageService':
        return package(weight);
      default:
        return "Error";
    }
  }

  function stampedLetter(weight) {
    switch (true) {
      case (weight <= 1): 
        return .55;
      case (weight <= 2):
        return .75
      case (weight <= 3):
        return .95
      case (weight <= 3.5):
        return 1.15
      }
    }

    function meteredLetter(weight) {
      switch (true) {
        case (weight <= 1): 
          return .51;
        case (weight <= 2):
          return .71
        case (weight <= 3):
          return .91
        case (weight <= 3.5):
          return 1.11
        }
      }

      function largeEnvelope(weight) {
        switch (true) {
          case (weight <= 1): 
            return 1.00;
          case (weight <= 2):
            return 1.20;
          case (weight <= 3):
            return 1.40;
          case (weight <= 4):
            return 1.60;
          case (weight <= 5): 
            return 1.80;
          case (weight <= 6):
            return 2.00;
          case (weight <= 7):
            return 2.20;
          case (weight <= 8):
            return 2.40;
          case (weight <= 9): 
            return 2.60;
          case (weight <= 10):
            return 2.80;
          case (weight <= 11):
            return 3.00;
          case (weight <= 12):
            return 3.20;
          case (weight <= 13): 
            return 3.40;
          }
        }
  