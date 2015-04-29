/** @jsx React.DOM */
// use jsx to render html, do not modify simple.html
require('rc-input-number/assets/index.css');
var InputNum = require('rc-input-number');
var React = require('react');
var Component = React.createClass({
  getInitialState: function(){
    return {
      disabled: false
    }
  },
  triggerDisabled: function(){
    this.setState({disabled: !this.state.disabled});
  },
  render: function(){
    return (
      <div>
        <InputNum min="1" max="10" value="8" disabled={this.state.disabled} />
        <p>
          <button onClick={this.triggerDisabled}>Trigger Disabled</button>
        </p>
      </div>
      );
  }
})
React.render(<Component/>, document.getElementById('__react-content'));
