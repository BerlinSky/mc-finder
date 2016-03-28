'use strict';

var AppContainer = React.createClass ({

	propTypes: {
		headerData: React.PropTypes.arrayOf (
			React.PropTypes.string
		),
		clientData: React.PropTypes.arrayOf (
			React.PropTypes.arrayOf (
				React.PropTypes.string
			)
		)
	},

	getInitialState: function() {
    return {
    	clientData: this.props.clientData,
			searchState: false,
			preSearchData: null
    };
	},

	_toggleSearch: function() {
		if(this.state.searchState) {
			this.setState({
				clientData: this.preSearchData,
				searchState: false
			});
			this.preSearchData = null;
		}
		else {
			this.preSearchData = this.state.clientData,
			this.setState({
				searchState: true
			});
		}
	},

	_exportJson: function(e) {
		var content = JSON.stringify(this.state.clientData);
		var url = window.URL || window.webkitURL;
		var blob = new Blob([content], { type: 'text/json' });
		e.target.href = url.createObjectURL(blob);
		e.target.download = 'table-data.json';
	},

	_exportCsv: function(e) {
		var content = this.state.clientData.reduce(function(previous, current) {
			var cc = current.reduce(function(p, c, index) {
				return p 
					+ '"'
					+ c.replace(/"/g, '""')
					+ '"'
					+ (index < current.length-1 ? ',' : '');
				}, '') + "\n";

			return previous + cc;
		}, '');

		var url = window.URL || window.webkitURL;
		var blob = new Blob([content], { type: 'text/csv' });

		e.target.href = url.createObjectURL(blob);
		e.target.download = 'table-data.csv';
	},

	render: function() {
		return (
			<div>
				<AppHeader 
					toggleSearch={ this._toggleSearch } 
					exportJson={ this._exportJson } 
					exportCsv={ this._exportCsv } 
				/>
				<AppMain 
					headerData={ this.props.headerData } 
				 	clientData={ this.state.clientData } 
				 	searchState={ this.state.searchState }
			 	/>
				<AppFooter />
			</div>
		)
	}
});

window.AppContainer = AppContainer;