'use strict';

var ClientTable = React.createClass ({
	getInitialState: function() {
    return {
    	tableData: this.props.clientData,
    	sortCol: null,
			sortDesc: false,
			editState: null,
			preSearchData: this.props.clientData.slice()
    };
	},

	_sortColumn: function(e) {
		var col = e.target.cellIndex;
		var dataCopy = this.state.tableData.slice();
		var sortDesc = (this.state.sortCol === col && !this.state.sortDesc);

		dataCopy.sort(function(a, b){
			return sortDesc
				? a[col] < b[col]
				: a[col] > b[col];
		});

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

	_searchClientData: function(e) {
		var searchData = this.state.tableData.slice();
		var searchValue = e.target.value.toLowerCase();

		if(!searchValue) {
			this.setState({
				tableData: this.state.preSearchData
			});
			return;
		}
		var index = e.target.dataset.index;

		var filtered = searchData.filter(function(row) {
			return row[index].toString().toLowerCase().indexOf(searchValue) > -1;
		});

		this.setState({
			tableData: filtered
		});
	},

	render: function() {
		return (
			<table>
				<ClientTHead
					sortColumn={ this._sortColumn }
					headerData={ this.props.headerData } 
					sortCol={ this.state.sortCol }
					sortDesc={ this.state.sortDesc }
				/>
				<ClientTBody
					displayEditor={ this._displayEditor }
					saveChange={ this._saveChange }
					searchClientData={ this._searchClientData } 
					editState={ this.state.editState }
					headerData={ this.props.headerData } 
					clientData={ this.state.tableData } 
				/>
			</table>
		)
	}
});

window.ClientTable = ClientTable;
