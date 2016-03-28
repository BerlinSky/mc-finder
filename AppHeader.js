'use strict';

var AppHeader = React.createClass ({
	render: function() {
		return (
			<div className='app-header'>
				<h2>Mini Client Finder:</h2>
				<SearchButton toggleSearch={ this.props.toggleSearch }/>
				<ExportJsonButton exportJson={ this.props.exportJson }/>
			</div>
		)
	}
});

var ExportJsonButton = React.createClass ({
	render: function() {
		return (
			<a href='table-data.json'
			onClick={ this.props.exportJson }>Export (JSON)</a>
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