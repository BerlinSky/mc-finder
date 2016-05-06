'use strict';

{
 	// 112 - Export table data to a CSV file
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

