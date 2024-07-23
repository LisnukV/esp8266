const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//const port = 8080;
//const PORT = process.env.PORT || 3030;
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let sensorData = {};

let sensorData3 = {
  temperature: null,
  fanspeed: null,
  stan: null,
  stan2: null,
  oborot: null,
  brigtnes: null,

   ledar: null,
   ledag: null,
   ledab: null,

   lr0: null,
   lg0: null,
   lb0: null,

   lr1: null,
   lg1: null,
   lb1: null,

   lr2: null,
   lg2: null,
   lb2: null,

   lr3: null,
   lg3: null,
   lb3: null,

   lr4: null,
   lg4: null,
   lb4: null,

   lr5: null,
   lg5: null,
   lb5: null,

   lr6: null,
   lg6: null,
   lb6: null,

   lr7: null,
   lg7: null,
   lb7: null

};

//app.post('/data', (req, res) => {
//  sensorData = req.body;
//  console.log('Received data:', sensorData);
//  res.status(200).send('Data received');
//});

app.post('/data', (req, res) => {
  sensorData = req.body;

  // Обновление значений в sensorData3
  if (sensorData.temperature !== undefined) {
    sensorData3.temperature = sensorData.temperature;
  }
  if (sensorData.fanspeed !== undefined) {
    sensorData3.fanspeed = sensorData.fanspeed;
  }
  if (sensorData.stan !== undefined) {
    sensorData3.stan = sensorData.stan;
  } if (sensorData.stan2 !== undefined) {
    sensorData3.stan2 = sensorData.stan2;
  }
  if (sensorData.oborot !== undefined) {
    sensorData3.oborot = sensorData.oborot;
  }
  if (sensorData.brigtnes !== undefined) {
    sensorData3.brigtnes = sensorData.brigtnes;
  }

  if (sensorData.ledar !== undefined) {
    sensorData3.ledar = sensorData.ledar;
  }
  if (sensorData.ledag !== undefined) {
    sensorData3.ledag = sensorData.ledag;
  }
  if (sensorData.ledab !== undefined) {
    sensorData3.ledab = sensorData.ledab;
  }

  if (sensorData.lr0 !== undefined) {
    sensorData3.lr0 = sensorData.lr0;
  }
  if (sensorData.lg0 !== undefined) {
    sensorData3.lg0 = sensorData.lg0;
  }
  if (sensorData.lb0 !== undefined) {
    sensorData3.lb0 = sensorData.lb0;
  }

  if (sensorData.lr1 !== undefined) {
    sensorData3.lr1 = sensorData.lr1;
  }
  if (sensorData.lg1 !== undefined) {
    sensorData3.lg1 = sensorData.lg1;
  }
  if (sensorData.lb1 !== undefined) {
    sensorData3.lb1 = sensorData.lb1;
  }

  if (sensorData.lr2 !== undefined) {
     sensorData3.lr2 = sensorData.lr2;
  }
  if (sensorData.lg2 !== undefined) {
     sensorData3.lg2 = sensorData.lg2;
  }
  if (sensorData.lb2 !== undefined) {
     sensorData3.lb2 = sensorData.lb2;
  }
  
  if (sensorData.lr3 !== undefined) {
    sensorData3.lr3 = sensorData.lr3;
 }
 if (sensorData.lg3 !== undefined) {
    sensorData3.lg3 = sensorData.lg3;
 }
 if (sensorData.lb3 !== undefined) {
    sensorData3.lb3 = sensorData.lb3;
 }
 
 if (sensorData.lr4 !== undefined) {
  sensorData3.lr4 = sensorData.lr4;
}
if (sensorData.lg4 !== undefined) {
  sensorData3.lg4 = sensorData.lg4;
}
if (sensorData.lb4 !== undefined) {
  sensorData3.lb4 = sensorData.lb4;
}


if (sensorData.lr5 !== undefined) {
  sensorData3.lr5 = sensorData.lr5;
}
if (sensorData.lg5 !== undefined) {
  sensorData3.lg5 = sensorData.lg5;
}
if (sensorData.lb5 !== undefined) {
  sensorData3.lb5 = sensorData.lb5;
}

 

if (sensorData.lr6 !== undefined) {
  sensorData3.lr6 = sensorData.lr6;
}
if (sensorData.lg6 !== undefined) {
  sensorData3.lg6 = sensorData.lg6;
}
if (sensorData.lb6 !== undefined) {
  sensorData3.lb6 = sensorData.lb6;
}


if (sensorData.lr7 !== undefined) {
  sensorData3.lr7 = sensorData.lr7;
}
if (sensorData.lg7 !== undefined) {
  sensorData3.lg7 = sensorData.lg7;
}
if (sensorData.lb7 !== undefined) {
  sensorData3.lb7 = sensorData.lb7;
}




  console.log('Received data:', sensorData);
  console.log('Updated sensorData3:', sensorData3);
  res.status(200).send('Data received');
});


app.get('/data3', (req, res) => {
  res.json(sensorData3);
});

let sensorData2 = {};

app.post('/data2', (req, res) => {
  sensorData2 = req.body;
  console.log('SeekBar data:', sensorData2);
  res.status(200).send('Data received');
});

app.get('/sensordata', (req, res) => {
  res.json(sensorData);
});

app.get('/seekbardata', (req, res) => {
  res.json(sensorData2);
});

// Обновите маршрут для главной страницы
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ESP8266 Sensor Data</title>
    </head>
    <body>
      <h1>Sensor Data</h1>
      <p>Temperature: ${sensorData.temperature || '--'} °C</p>
      <p>Humidity: ${sensorData.humidity || '--'} %</p>
    </body>
    </html>

  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
