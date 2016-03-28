'use strict';

var AppHeader = React.createClass ({
	render: function() {
		return (
			<div className='app-header'>
				<h2>Mini Client Finder:</h2>
				<SearchButton toggleSearch={ this.props.toggleSearch }/>
			</div>
		)
	}
});

var SearchButton = React.createClass ({
	render: function() {
		return (
			<button onClick={ this.props.toggleSearch }>Search</button>
		)
	}
});

window.AppHeader = AppHeader;