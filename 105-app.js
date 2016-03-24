 {
 	// 105 - Add sorting direction
 }


var logMixin = {
	_log: function(data) {
		console.log(this.name + ': '+ data);
	},

	componentWillUpdate: function(nextProps, nextState) {
		this._log('componentWillUpdatet');
	},

	componentDidUpdate: function() {
		this._log('componentDidUpdate');
	},

	componentWillMount: function() {
		this._log('componentWillMount');
	},

	componentDidMount: function() {
		this._log('componentDidMount');
	},

	componentWillUnmount: function() {
		this._log('componentWillUnmount');
	}
};

// Main component
var McFinder = React.createClass({
	name: 'McFinder',
	mixins: [logMixin],

	// Use the propTypes for validation and documentation
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

	render: function() {
		var client = "Nathan Nolan"

		return (
			<div>
			 <h2>Mini Client Finder:</h2>
			 <ClientTable headerData={ this.props.headerData } clientData={ this.props.clientData } />
			</div>
		)
	}
});

var ClientTable = React.createClass ({
	getInitialState: function() {
    return {
    	tableData: this.props.clientData,
    	sortCol: null,
			sortDesc: false 
    };
	},

	_sortColumn: function(e) {
		
		var col = e.target.cellIndex;
		var dataCopy = this.state.tableData.slice();
		var sortDesc = (this.state.sortCol === col && !this.state.sortDesc);

		dataCopy.sort(function(a, b){
			return sortDesc
				? a[col] < b[col]
				: a[col] > b[col];
		});

		this.setState({
			tableData: dataCopy,
			sortCol: col,
			sortDesc: sortDesc 
		});
	},

	render: function() {
		return (
			<div>
				<table>
					<thead onClick={ this._sortColumn }>
						<tr>
							{
								this.props.headerData.map(function(title, idx) {
									return(<td key={ idx }>{ title }</td>)
								})
							}
						</tr>
					</thead>

					<tbody>
						{
							this.state.tableData.map(function(row, idx) {
								return(
									<tr key={ idx }>
									{
										row.map(function(rowData, idx) {
											return(<td key={ idx }>{ rowData }</td>)
										})
									}
									</tr>
								)
							})
						}
					</tbody>

				</table>
			</div>
		)
	}
});

ReactDOM.render(
  <McFinder headerData={ headerData } clientData={ clientData } />, 
  document.getElementById('app')
);

