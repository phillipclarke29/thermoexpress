var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ThermoSchema   = new Schema({
    temp: Number
});

module.exports = mongoose.model('Thermo', ThermoSchema);
