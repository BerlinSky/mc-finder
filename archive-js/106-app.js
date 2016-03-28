 {
 	// 106 - Add sorting direction arrows
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
		console.info("sortColumn");

		var col = e.target.cellIndex;
		var dataCopy = this.state.tableData.slice();
		var sortDesc = (this.state.sortCol === col && !this.state.sortDesc);

		console.info("col", col);

		dataCopy.sort(function(a, b){
			console.info("a[col] : b[col]", a[col] + " : " + b[col]);

			return sortDesc
				? a[col] < b[col]
				: a[col] > b[col];
		});

		console.info("dataCopy after sorting", dataCopy);

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
									if (this.state.sortCol === idx) {
										title += this.state.sortDesc ? ' \u2191' : '\u2193'
									}
									return(<td key={ idx }>{ title }</td>)
								}.bind(this))
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

