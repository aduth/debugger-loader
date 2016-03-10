module.exports = function() {
	var context = this.query.substr( 1 );
	return 'module.exports = require( \'debug\' )( \'' + context + '\' );';
}
