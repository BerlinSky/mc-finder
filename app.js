'use strict';

const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

{
	// 114 - ???
}

class MainLayout extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
}

class SearchLayout extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
      )
  }
}

class UserList extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
      )
  }
}

class WidgetList extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
}

class Home extends React.Component {
	render() {
		return (
			<AppContainer 
				headerData={ headerData } 
				clientData={ clientData } 
			/>
		)
	}
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widgets" component={WidgetList} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('app'))





