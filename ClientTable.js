'use strict';

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
					headerData={ this.props.headerData } 
					clientData={ this.state.tableData } 
				/>
			</table>
		)
	}
});

window.ClientTable = ClientTable;
