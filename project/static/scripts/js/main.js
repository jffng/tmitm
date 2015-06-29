(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */

var Navigation = React.createClass({displayName: "Navigation",
  render : function() {
    return (
      React.createElement("div", {id: "sidebar-wrapper"}, 
        React.createElement("ul", {className: "sidebar-nav"}, 
          React.createElement("li", {className: "sidebar-brand"}, " The Medium is the Machine "), 
          React.createElement(NavItem, {name: "Portrait #1: A Number", route: "#number"}), 
          React.createElement(NavItem, {name: "Portrait #2: A Map", route: "#map"}), 
          React.createElement(NavItem, {name: "Portrait #3: A Robot", route: "#robot"}), 
          React.createElement(NavItem, {name: "Portrait #4: An Ad", route: "#ad"})
        )
      )
      )
  }
});

var NavItem = React.createClass({displayName: "NavItem",
  handleClick: function(event){
    React.render(React.createElement(PostBody, {name: this.props.name}), document.getElementById('post'));
  },
  render : function() {
    return (
        React.createElement("li", {onClick:  this.handleClick}, 
          React.createElement(NavLink, {link:  this.props.route, name:  this.props.name})
        )
      )
  }
});

var NavLink = React.createClass({displayName: "NavLink",
  render : function(){
    return (
      React.createElement("a", {href: this.props.link}, " ",  this.props.name, " ")
      )
  }
});

var PostBody = React.createClass({displayName: "PostBody",
  render: function () {
    return (
      React.createElement("div", {className: "post-body"}, 
        React.createElement(PostTitle, {name: this.props.name}), 
        React.createElement(Vimeo, null)
      )
      )
  }
});

var PostTitle = React.createClass({displayName: "PostTitle",
  render: function() {
    return (
        React.createElement("div", {className: "post-title"}, 
        React.createElement("h3", null, " ", this.props.name, " ")
        )
      )
  }
});

var PostContainer = React.createClass({displayName: "PostContainer",
  render : function(){
    return (
      React.createElement("div", {id: "post"}
      )
    )
  }
});

var Vimeo = React.createClass({displayName: "Vimeo",
  render: function(){
    return (
      React.createElement("iframe", {src: "https://player.vimeo.com/video/127062347", width: "500", height: "281", frameborder: "0", webkitallowfullscreen: true, mozallowfullscreen: true, allowfullscreen: true})
    )
  }
});

var DynamicSearch = React.createClass({displayName: "DynamicSearch",

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
      React.createElement("div", null, 
        React.createElement("input", {type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Search!"}), 
        React.createElement("ul", null, 
           countries.map(function(country){ return React.createElement("li", null, country.name, " ") }) 
        )
      )
    )
  }

});

React.render(
  React.createElement("div", {id: "main"}, 
    React.createElement(Navigation, null), 
    React.createElement(PostContainer, null)
  ),
  document.getElementById('container')
);

},{}]},{},[1])