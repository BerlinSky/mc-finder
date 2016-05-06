'use strict';

{
 	// 109 - Reorganize the components
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

