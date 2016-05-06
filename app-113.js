'use strict';

var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

{
 	// 113 - Add router
 }

 var MainLayout = React.createClass({
  render: function() {
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
})

var Home = React.createClass({
  render: function() {
    return (<h1>Home Page</h1>)
  }
})


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return <h1>Home</h1>;
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return <h1>About</h1>;
    }
}

class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return <h1>Inbox</h1>;
    }
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

ReactDOM.render((
 <Router history={browserHistory}>
	<Route path="/" component={App}>
	 <IndexRoute component={Home} />
	</Route>
</Router>
), document.getElementById('app'))

// const routes = {
//   path: "\/",
//   component: Home,
//   indexRoute: { component: App },
//   childRoutes: [
//     { path: 'about', component: About },
//     { path: 'inbox', component: Inbox },
//   ]
// };


// ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(
// 	(<Router history={browserHistory}>
// 		<Route path="/" component={Home}>
// 		 <IndexRoute component={Inbox} />
// 		</Route>
// 	</Router>), document.getElementById('app'));


// var routes = {
//   path: '\/',
//   component: App
// }

// ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));

// ReactDOM.render(
// 	(
// 		<Router history={browserHistory}>
// 			<Route path="/" component={App}>
// 			</Route>
// 		</Router>
// 	),
//   document.getElementById('app')
// );

