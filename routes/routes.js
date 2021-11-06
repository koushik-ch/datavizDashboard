exports.piechart = function (req, res, next) {
    res.render('piechart.ejs');
}

exports.highlightTables = function (req, res, next) {
    res.render('highlightTables.ejs');
}

exports.textTables = function (req, res, next) {
    res.render('textTables.ejs');
}

exports.treeMaps = function (req, res, next) {
    res.render('treeMaps.ejs');
}

exports.packedBubbles = function (req, res, next) {
    res.render('packedBubbles.ejs');
}

exports.circleViews = function (req, res, next) {
    res.render('circleViews.ejs');
}
exports.horizontalBars = function (req, res, next) {
    res.render('horizontalBars.ejs');
}

exports.scatterPlots = function (req, res, next) {
    res.render('scatterPlots.ejs');
}

exports.whiskerPlots = function (req, res, next) {
    res.render('whiskerPlots.ejs');
}

exports.histogramBars = function (req, res, next) {
    res.render('histogramBars.ejs');
}
