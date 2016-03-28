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

	render: function() {
		return (
			<div>
				<AppHeader 
					toggleSearch={ this._toggleSearch } 
					exportJson={ this._exportJson } 
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