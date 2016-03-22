 {
 	// 101 - Create client talbe shell
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

	  	propTypes: {
	  		name: React.PropTypes.string,
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
						 <ClientTable />
	 				</div>
	 			)
	 		}
	 	});

	  var ClientTable = React.createClass ({
	  	render: function() {
	  		return (
	  			<table>
	  				<ClientTHeader />
	  				<ClientTBody />
	  			</table>
	  		)
	  	}
	  });

	  var ClientTHeader = React.createClass ({
	  	render: function() {
	  		return (
  				<thead>
  					<tr>
  						<td>Book Title</td>
  						<td>Author Name</td>
  						<td>Language(s)</td>
  						<td>Published</td>
  						<td>Sales</td>
  					</tr>
  				</thead>
	  		)
	  	}
	  });

	  var ClientTBody = React.createClass ({
	  	render: function() {
	  		return (
					<tbody>
						<tr>
							<td>Book</td>
							<td>Author</td>
							<td>Language</td>
							<td>Published</td>
							<td>Sales</td>
						</tr>
						<tr>
							<td>Book</td>
							<td>Author</td>
							<td>Language</td>
							<td>Published</td>
							<td>Sales</td>
						</tr>
						<tr>
							<td>Book</td>
							<td>Author</td>
							<td>Language</td>
							<td>Published</td>
							<td>Sales</td>
						</tr>
						<tr>
							<td>Book</td>
							<td>Author</td>
							<td>Language</td>
							<td>Published</td>
							<td>Sales</td>
						</tr>
					</tbody>
	  		)
	  	}
	  });

    ReactDOM.render(
      <McFinder name="Kentucky Chicken" isInstitution={ false } />, 
      document.getElementById('app')
    );