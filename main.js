 {
 	// 108 - Save the in-cell editing value
 }

 <McFinder headerData={ headerData } clientData={ clientData } />, 

// Main component
var McFinder = React.createClass({
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

	getInitialState: function() {
    return {
    	tableData: this.props.clientData,
			searchState: false,
			preSearchData: null
    };
	},

	_toggleSearch: function() {
		if(this.state.searchState) {
			this.setState({
				data: this.preSearchData,
				searchState: false
			});
			this.preSearchData = null;
		}
		else {
			this.preSearchData = this.state.tableData,
			this.setState({
				searchState: true
			});
		}

		console.info('this.state.searchState', this.state.searchState);
	},

	render: function() {
		var client = "Nathan Nolan"

		return (
			<div>
			 <h2>Mini Client Finder:</h2>
			 <SearchButton toggleSearch={ this._toggleSearch  }/>
			 <ClientTable 
			  headerData={ this.props.headerData } 
			 	clientData={ this.props.clientData } 
			 	searchState={ this.state.searchState } />
			</div>
		)
	}
});

var SearchButton = React.createClass ({
	render: function() {
		return (
			<button onClick={ this.props.toggleSearch }>Search</button>
		)
	}
});

var ClientTable = React.createClass ({
	getInitialState: function() {
    return {
    	tableData: this.props.clientData,
    	sortCol: null,
			sortDesc: false,
			editState: null
			// searchState: false,
			// preSearchData: null
    };
	},

	_sortColumn: function(e) {
		console.info("sortColumn");

		var col = e.target.cellIndex;
		var dataCopy = this.state.tableData.slice();
		var sortDesc = (this.state.sortCol === col && !this.state.sortDesc);

		console.info("col", col);

		dataCopy.sort(function(a, b){
			console.info("a[col] : b[col]", a[col] + " : " + b[col]);

			return sortDesc
				? a[col] < b[col]
				: a[col] > b[col];
		});

		console.info("dataCopy after sorting", dataCopy);

		this.setState({
			tableData: dataCopy,
			sortCol: col,
			sortDesc: sortDesc 
		});
	},

	_displayEditor: function(e) {
		this.setState( {
			editState: {
				row: parseInt(e.target.dataset.row, 10),
				cell: e.target.cellIndex
			}
		});
	},

	_saveChange: function(e) {
		e.preventDefault();

		var input = e.target.firstChild;
		var dataCopy = this.state.tableData.slice();

		dataCopy[this.state.editState.row][this.state.editState.cell] = input.value;

		this.setState({
			editState: null,
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
									if (this.state.sortCol === idx) {
										title += this.state.sortDesc ? ' \u2191' : '\u2193'
									}
									return(<td key={ idx } data-index={ idx }>{ title }</td>)
								}.bind(this))
							}
						</tr>
					</thead>

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

				</table>
			</div>
		)
	}
});