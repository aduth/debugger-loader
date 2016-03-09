module.exports = function() {
	var context = this.query.substr( 1 );

	if ( process.env.NODE_ENV !== 'production' ) {
		return 'module.exports = require( \'debug\' )( \'' + context + '\' );';
	}

	return 'module.exports = function() {};'
}
