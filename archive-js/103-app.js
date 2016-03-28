 {
 	// 103 - Use data to populate client table
 }

var headerData = [
	"Name", "State", "City", "Telephone", "Balance"
];

var clientData = [
	["Ann Alexander", "CA", "Los Angelos", "509-222-2121", "50 million"],
	["Bob Alexander", "NJ", "Jersey City", "409-222-2121", "10 million"],
	["Cathy Alexander", "NY", "New York", "209-222-2121", "80 million"],
	["Kevin Alexander", "GA", "Atlanda", "109-222-2121", "70 million"],
	["Larry Alexander", "TX", "Dallas", "709-222-2121", "60 million"],
	["Mary Alexander", "NH", "Hew Heaven", "609-222-2121", "250 million"],
	["Nancy Alexander", "MA", "Boston", "809-222-2121", "750 million"],
	["Oscar Alexander", "LA", "New Orleans", "449-222-2121", "850 million"],
	["Peter Alexander", "FL", "Miami", "339-222-2121", "590 million"],
	["Wendy Alexander", "NM", "El Paso", "229-222-2121", "450 million"],
	["Zach Alexander", "CO", "Denvor", "789-222-2121", "50 million"]
];

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

	propTypes: {
		isInstitution: React.PropTypes.bool
	},

	getDefaultProps: function() {
	  return {
	   	name: 'Smith College'     
	  };
	},

	getInitialState: function() {
	  return {
	  	searchCount: 0      
	  };
	},

	_incrementSearchCount: function() {
		this.setState ({
	  	searchCount: this.state.searchCount + 1     
		});
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
			 <div>{ client }</div>	
			 <div>Search Count: { this.state.searchCount }</div>
			 <br/>
			 <div><button onClick={ this._incrementSearchCount }>Increment Search Count</button></div>
			 <br/>
			 <ClientTable headerData={ this.props.headerData } clientData={ this.props.clientData } />
			</div>
		)
	}
});

var ClientTable = React.createClass ({
	render: function() {
		return (
			<table>
				<ClientTHeader headerData={ this.props.headerData } />
				<ClientTBody clientData={ this.props.clientData } />
			</table>
		)
	}
});

var ClientTHeader = React.createClass ({
	render: function() {
		return (
			<thead>
				<tr>
					{
						this.props.headerData.map(function(title, idx) {
							return(<td key={ idx } >{ title }</td>)
						})
					}
				</tr>
			</thead>
		)
	}
});

var ClientTBody = React.createClass ({
	render: function() {
		return (
			<tbody>
			{
				this.props.clientData.map(function(row, idx) {
					return(<ClientTRow key={ idx } clientRowData={ row } />)
				})
			}
			</tbody>
		)
	}
});

var ClientTRow = React.createClass ({
	render: function() {
		return (
			<tr>
			{
				this.props.clientRowData.map(function(rowData, idx) {
					return(<td key={ idx }>{ rowData }</td>)
				})
			}
			</tr>
		)
	}
});

ReactDOM.render(
  <McFinder headerData={ headerData } clientData={ clientData }isInstitution={ false } />, 
  document.getElementById('app')
);

