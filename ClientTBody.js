'use strict';

var ClientTBody = React.createClass ({

	getInitialState: function() {
	  return {
	  	tableData: this.props.clientData
	  };
	},

	render: function() {
		return (
			<tbody onDoubleClick={ this.props.displayEditor }>
					<tr className={ this.classNameText } onChange={ this.props.searchClientData }>
						{
							this.props.headerData.map(function(_ignore, idx) {
								var searchState = this.props.searchState;
								var searchText = searchState ? 'Start' : 'End';

								return(
									<td key={ idx }>
										<input type='text' className={ searchText } 
											data-index={ idx }
											key={ idx } defaultValue={ searchText }
										/>
									</td>)
							}.bind(this))
						}
					</tr>

					{
						this.props.clientData.map(function(row, rowIndex) {
							var editState = this.props.editState;

							return(
								<tr key={ rowIndex }>
								{
									row.map(function(cellData, cellIndex) {
										var displayData = cellData;

										if (editState && editState.row === rowIndex && editState.cell === cellIndex) {
											displayData = (
												<form onSubmit={ this.props.saveChange }>
													<input type='text' defaultValue={ displayData } />
												</form>
											);
										}

										return(
											<td key={ cellIndex } data-row={ rowIndex }>{ displayData }</td>
										)
									}.bind(this))
								}
								</tr>
							)
						}.bind(this))
					}
			</tbody>
		)
	}
});

window.ClientTBody = ClientTBody;
