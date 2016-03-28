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
    	tableData: this.props.clientData,
			searchState: false,
			preSearchData: null
    };
	},

	_toggleSearch: function() {
		if(this.state.searchState) {
			this.setState({
				data: this.preSearchData,
				searchState: false
			});
			this.preSearchData = null;
		}
		else {
			this.preSearchData = this.state.tableData,
			this.setState({
				searchState: true
			});
		}

		console.info('_toggleSearch');
	},

	render: function() {
		return (
			<div>
				<AppHeader toggleSearch={ this._toggleSearch } />
				<AppMain 
					headerData={ this.props.headerData } 
				 	clientData={ this.props.clientData } 
				 	searchState={ this.state.searchState }
			 	/>
				<AppFooter />
			</div>
		)
	}
});

window.AppContainer = AppContainer;