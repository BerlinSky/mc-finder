'use strict';

var ClientTBody = React.createClass ({

	getInitialState: function() {
	  return {
	  	tableData: this.props.clientData
	  };
	},

	render: function() {
		return (
			<tbody onDoubleClick={ this._displayEditor }>
					<tr className={ this.classNameText }>
						{
							this.props.headerData.map(function(_ignore, idx) {
								var searchState = this.props.searchState;
								var searchText = searchState ? 'Start' : 'End';

								return(
									<td key={ idx }>
										<input type='text' className={ searchText } key={ idx } defaultValue={ searchText }/>
									</td>)
							}.bind(this))
						}
					</tr>

					{
						this.state.tableData.map(function(row, rowIndex) {
							var editState = this.state.editState;

							return(
								<tr key={ rowIndex }>
								{
									row.map(function(cellData, cellIndex) {
										var displayData = cellData;

										if (editState && editState.row == rowIndex && editState.cell == cellIndex) {
											displayData = (
												<form onSubmit={ this._saveChange }>
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