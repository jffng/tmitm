/** @jsx React.DOM */

var Navigation = React.createClass({
  render : function() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand"> The Medium is the Machine </li>        
          <NavItem name="Portrait #1: A Number" route="#number"/>
          <NavItem name="Portrait #2: A Map" route="#map"/>
          <NavItem name="Portrait #3: A Robot" route="#robot"/>
          <NavItem name="Portrait #4: An Ad" route="#ad"/>
        </ul>
      </div>
      )
  }
});

var NavItem = React.createClass({
  handleClick: function(event){
    React.render(<PostBody name={this.props.name}/>, document.getElementById('post'));
  },
  render : function() {
    return (
        <li onClick={ this.handleClick } > 
          <NavLink link={ this.props.route } name={ this.props.name } />
        </li>
      )
  }
});

var NavLink = React.createClass({
  render : function(){
    return (
      <a href={this.props.link}> { this.props.name } </a>
      )
  }
});

var PostBody = React.createClass({
  render: function () {
    return (
      <div className="post-body">
        <PostTitle name={this.props.name}/>
        <Vimeo/>
      </div>
      )
  }
});

var PostTitle = React.createClass({
  render: function() {
    return (
        <div className="post-title">
        <h3 > {this.props.name} </h3>
        </div>
      )
  }
});

var PostContainer = React.createClass({
  render : function(){
    return (
      <div id="post">
      </div>
    )
  }
});

var Vimeo = React.createClass({
  render: function(){
    return (
      <iframe src="https://player.vimeo.com/video/127062347" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    )
  }
});

var DynamicSearch = React.createClass({

  // sets initial state
  getInitialState: function(){
    return { searchString: '' };
  },

  // sets state, triggers render method
  handleChange: function(event){
    // grab value form input box
    this.setState({searchString:event.target.value});
    console.log("scope updated!")
  },

  render: function() {

    var countries = this.props.items;
    var searchString = this.state.searchString.trim().toLowerCase();

    // filter countries list by value from input box
    if(searchString.length > 0){
      countries = countries.filter(function(country){
        return country.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search!" />
        <ul>
          { countries.map(function(country){ return <li>{country.name} </li> }) }
        </ul>
      </div>
    )
  }

});

React.render(
  <div id="main">
    <Navigation />
    <PostContainer /> 
  </div>,
  document.getElementById('container')
);