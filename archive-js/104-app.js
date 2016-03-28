 {
 	// 104 - Sort data on the client table
 	// Invoke the sort event on the table header
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

		// Conditionals
		if (this.props.isInstitution) {
			client = (
			 <Client name={ this.props.name }/>	
			)
		}

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
    	tableData: this.props.clientData    
    };
	},

	_sortColumn: function(e) {
		console.info("sortColumn");

		var col = e.target.cellIndex;
		var dataCopy = this.state.tableData.slice();

		console.info("col", col);
		console.info("dataCopy", dataCopy);

		dataCopy.sort(function(a, b){
			return a[col] > b[col];
		});

		this.setState({
			tableData: dataCopy
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

