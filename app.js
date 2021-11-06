//create an express server 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//set ejs as the view engine
app.set('view engine', 'ejs');
//static files


//set ejs as the view engine
app.set('view engine', 'ejs');

//import routes
const routes = require('./routes/routes');

app.use('/piechart', routes.piechart);
app.use('/highlightTables', routes.highlightTables);
app.use('/textTables', routes.textTables);
app.use('/treeMaps', routes.treeMaps);
app.use('/packedBubbles', routes.packedBubbles);
app.use('/circleViews', routes.circleViews);
app.use('/horizontalBars', routes.horizontalBars);
app.use('/scatterPlots', routes.scatterPlots);
app.use('/whiskerPlots', routes.whiskerPlots);
app.use('/histogramBars', routes.histogramBars);

//send samp.ejs as response
app.get('/', (req, res) => {
    res.render('home.ejs');
});




app.listen(port);