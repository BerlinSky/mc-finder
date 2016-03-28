'use strict';

{
 	// 111 - Export table data to a JSON file
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

