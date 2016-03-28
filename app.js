'use strict';

{
 	// 111 - Export data from client table
 }

var App = React.createClass ({
	render: function() {
		return (

			<AppContainer 
				headerData={ headerData } 
				clientData={ clientData } 
			/>
		)
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

