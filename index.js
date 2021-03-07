
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
    let zone = req.query.zone;
    let rate = calculateRate (weight, type, zone);
    res.render('pages/rate', {
      rate: rate
    } );
  } );
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  function calculateRate(weight, type, zone){
    switch (type) {
      case 'stampedLetter':
        return stampedLetter(weight);
      case 'meteredLetter':
        return meteredLetter(weight);
      case 'largeEnvelope':
        return largeEnvelope(weight);
      case 'packageService':
        return package(weight, zone);
      default:
        return "\nError: You must select a mail type";
    }
  }

  function stampedLetter(weight) {
    switch (true) {
      case (weight <= 1): 
        return .55;
      case (weight <= 2):
        return .75;
      case (weight <= 3):
        return .95;
      case (weight <= 3.5):
        return 1.1;
      default:
        return "\nError: Invalid weight for that mail type please select a different mail type or enter a different weight";
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
          return 1.11;
         default:
           return "\nError: Invalid weight for that mail type please select a different mail type or enter a different weight";
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
          default:
            return "<br>Error: Invalid weight please enter a different weight";
          }
        }

        function package(weight, zone) {
          if (zone == ""){
            return "<br>Error: Please Select a distance for that Mail type"
          }
          switch (true) {
            case (weight <= 1): 
              switch (zone){
                case 'zone1':
                  return 7.70;
                case 'zone3':
                  return 8.10;
                case 'zone4':
                  return 8.25;
                case 'zone5':
                  return 8.50;
                case 'zone6':
                  return 8.80;
                case 'zone7':
                  return 9.10;
                case 'zone8':
                  return 9.90;
                case 'zone1':
                  return 16.85;
              }

            case (weight <= 2):
              switch (zone){
                case 'zone1':
                  return 8.55;
                case 'zone3':
                  return 8.85;
                case 'zone4':
                  return 10.10;
                case 'zone5':
                  return 11.10;
                case 'zone6':
                  return 11.95;
                case 'zone7':
                  return 13.90;
                case 'zone8':
                  return 15.20;
                case 'zone1':
                  return 26.75;
              }
            case (weight <= 3):
              switch (zone){
                case 'zone1':
                  return 9.05;
                case 'zone3':
                  return 9.90;
                case 'zone4':
                  return 11.10;
                case 'zone5':
                  return 12.80;
                case 'zone6':
                  return 13.50;
                case 'zone7':
                  return 17.20;
                case 'zone8':
                  return 20.40;
                case 'zone1':
                  return 35.80;
              };
            case (weight <= 4):
              switch (zone){
                case 'zone1':
                  return 9.55;
                case 'zone3':
                  return 10.75;
                case 'zone4':
                  return 11.75;
                case 'zone5':
                  return 14.20;
                case 'zone6':
                  return 17.69;
                case 'zone7':
                  return 21.20;
                case 'zone8':
                  return 23.60;
                case 'zone1':
                  return 41.45;
              }
            case (weight <= 5): 
            switch (zone){
              case 'zone1':
                return 10.60;
              case 'zone3':
                return 11.50;
              case 'zone4':
                return 12.50;
              case 'zone5':
                return 14.65;
              case 'zone6':
                return 20.20;
              case 'zone7':
                return 24.30;
              case 'zone8':
                return 27.20;
              case 'zone1':
                return 47.95;
            }
            case (weight <= 6):
              switch (zone){
                case 'zone1':
                  return 11.40;
                case 'zone3':
                  return 12.00;
                case 'zone4':
                  return 13.30;
                case 'zone5':
                  return 16.30;
                case 'zone6':
                  return 22.90;
                case 'zone7':
                  return 27.15;
                case 'zone8':
                  return 30.65;
                case 'zone1':
                  return 54.15;
              }
            case (weight <= 7):
              switch (zone){
                case 'zone1':
                  return 12.40;
                case 'zone3':
                  return 13.60;
                case 'zone4':
                  return 16.00;
                case 'zone5':
                  return 19.70;
                case 'zone6':
                  return 25.40;
                case 'zone7':
                  return 30.35;
                case 'zone8':
                  return 34.45;
                case 'zone1':
                  return 60.85;
              }
            case (weight <= 8):
              switch (zone){
                case 'zone1':
                  return 12.80;
                case 'zone3':
                  return 15.05;
                case 'zone4':
                  return 17.75;
                case 'zone5':
                  return 23.45;
                case 'zone6':
                  return 28.80;
                case 'zone7':
                  return 33.75;
                case 'zone8':
                  return 38.55;
                case 'zone1':
                  return 68.10;
              }
            case (weight <= 9): 
            switch (zone){
              case 'zone1':
                return 13.30;
              case 'zone3':
                return 16.25;
              case 'zone4':
                return 19.70;
              case 'zone5':
                return 26.75;
              case 'zone6':
                return 31.30;
              case 'zone7':
                return 36.40;
              case 'zone8':
                return 42.90;
              case 'zone1':
                return 75.80;
            }
            case (weight <= 10):
              switch (zone){
                case 'zone1':
                  return 14.15;
                case 'zone3':
                  return 17.45;
                case 'zone4':
                  return 21.20;
                case 'zone5':
                  return 29.00;
                case 'zone6':
                  return 33.90;
                case 'zone7':
                  return 40.00;
                case 'zone8':
                  return 46.75;
                case 'zone1':
                  return 82.60;
              }
            case (weight <= 11):
              switch (zone){
                case 'zone1':
                  return 7.70;
                case 'zone3':
                  return 8.10;
                case 'zone4':
                  return 8.25;
                case 'zone5':
                  return 8.50;
                case 'zone6':
                  return 8.80;
                case 'zone7':
                  return 9.10;
                case 'zone8':
                  return 9.90;
                case 'zone1':
                  return 16.85;
              }
            case (weight <= 12):
              switch (zone){
                case 'zone1':
                  return 16.90;
                case 'zone3':
                  return 20.60;
                case 'zone4':
                  return 25.15;
                case 'zone5':
                  return 34.50;
                case 'zone6':
                  return 41.45;
                case 'zone7':
                  return 50.10;
                case 'zone8':
                  return 57.15;
                case 'zone1':
                  return 98.10;
              }
            case (weight <= 13): 
            switch (zone){
              case 'zone1':
                return 17.90;
              case 'zone3':
                return 21.75;
              case 'zone4':
                return 26.55;
              case 'zone5':
                return 36.45;
              case 'zone6':
                return 44.50;
              case 'zone7':
                return 52.10;
              case 'zone8':
                return 59.80;
              case 'zone1':
                return 101.60;
            }
            default:
              return "\nError: Invalid weight please enter a different weight";
            }
          }
  