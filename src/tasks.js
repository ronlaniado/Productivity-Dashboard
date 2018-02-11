import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import './bulma.css';
import './fontawesome-all';
import './modal';

export default class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="column">
      <div className="card" visibility="false">
        <header className="card-header">
          <p className="card-header-title">{this.props.title}</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon delete" onClick={() => this.props.onDelete()}>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.description}
            <br />
            <p>{this.props.tags.split(",").filter(j => j != 0).map(i => <span className="tag is-success">{i}</span> )}</p>
            <br />
          </div>
        </div>
        <p className="priority">{this.props.priority}</p>
      </div>
      </div>
    );
  }
}