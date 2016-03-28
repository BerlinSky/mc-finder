'use strict';

var ClientTHead = React.createClass ({

	getInitialState: function() {
	  return {
	  	sortCol: this.props.sortCol,
			sortDesc: this.props.sortDesc
	  };
	},

	render: function() {
		return (
			<thead onClick={ this.props.sortColumn }>
				<tr>
				{
					this.props.headerData.map(function(title, idx) {
						if (this.props.sortCol === idx) {
							title += this.props.sortDesc ? ' \u2191' : '\u2193'
						}
						return(<th key={ idx } data-index={ idx }>{ title }</th>)
					}.bind(this))
				}
				</tr>
			</thead>
		)
	}
});

window.ClientTHead = ClientTHead;