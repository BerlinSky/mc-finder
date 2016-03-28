'use strict';

var AppMain = React.createClass ({
	render: function() {
		return (
			<div className='app-main'>
				<ClientTable 
					searchClientData={ this.props.searchClientData } 
					headerData={ this.props.headerData } 
				 	clientData={ this.props.clientData } 
				 	searchState={ this.props.searchState }
			 	/>
			</div>
		)
	}
});

window.AppMain = AppMain;