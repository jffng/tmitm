/** @jsx React.DOM */

var Navigation = React.createClass({
  render : function() {
    return (
      <div>
        <p style={{textAlign: 'left', fontStyle: 'italic'}}> The Medium is the Machine </p>
        <ul>
          <NavItem name="Portrait #1: A Number" route="number"/>
          <NavItem name="Portrait #2: A Map" route="map"/>
          <NavItem name="Portrait #3: A Robot" route="robot"/>
          <NavItem name="Portrait #4: An Ad" route="ad"/>
        </ul>
      </div>
      )
  }
});

var NavItem = React.createClass({
  handleClick: function(event){
    console.log(event.target);
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
})

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

// list of countries, defined with JavaScript object literals
var countries = [
  {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"},
  {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"},
  {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"},
  {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"},
  {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"},
  {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"},
  {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"}
];

React.render(
  <Navigation />,
  document.getElementById('nav')
);