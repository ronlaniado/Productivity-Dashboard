import React, { Component } from 'react';
import { render } from 'react-dom';
import Tasks from './tasks';
import './style.css';
import './bulma.css';
import './fontawesome-all';

class App extends Component {
  tagifyInputs = [];
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: '',
      description: '',
      subtasks: [],
      priority: 'Urgent',
      value: this.state,
      renderTasks: false,
      tasksArray: [],
      key: 0,
    };
    this.saveTask = this.saveTask.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubtasks = this.handleSubtasks.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    /*this.organizeTags = this.organizeTags.bind(this);*/
    this.getTagValue = this.getTagValue.bind(this);
  }
  componentDidMount() {
    let tagInputs = document.querySelectorAll('input[type="tags"]');
    let tagifyInputs = [];
    [].forEach.call(tagInputs, function (tagInput) {
      tagifyInputs.push(new Tagify(tagInput));
    });
    this.tagifyInputs = tagifyInputs;
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }
  cancelModal() {
    this.toggleModal();
    this.setState({
      description: '',
      title: '',
      subtasks: [],
      time: '1:00 AM',
      value: 'Urgent'
    });
  }
  getTagValue() {
    return this.tagifyInputs[0].getValue();
  }
  handleTitle(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  }
  handleDescription(event) {
    event.preventDefault();
    this.setState({
      description: event.target.value,
    });
  }
  handleSubtasks(event) {
    event.preventDefault();
    this.setState({
      subtasks: event.target.value,
    });
  }
  handlePriority(event) {
    event.preventDefault();
    this.setState({
      priority: event.target.value
    });
  }
  /*organizeTags() {
    let tagsArray = this.getTagValue().split(",");
    console.log("This array contains " + tagsArray);
    console.log(tagsArray.length)
    for (var i = 0; i < tagsArray.length; i++) {
      return <span className="tag is-success ">{tagsArray[i]}</span>
      }
  }*/
  saveTask() {
    const tasksArray = this.state.tasksArray.concat([
      {
        title: this.state.title,
        description: this.state.description,
        key: Math.random(),
        time: this.state.time,
        tags: this.getTagValue(),
        priority: this.state.priority
      }
    ]);
    if ((this.state.title != '') && (this.state.tags != []) && this.state.priority != '') {
      this.setState({
        isOpen: !this.state.isOpen,
        tasksArray
      });
      console.log("The key for the created task is " + this.state.key);
    } else {
      alert("Please fill all required form fields");
    }
    this.setState({
      description: '',
      title: '',
      subtasks: [],
      minuteValue: "00"
    });
  console.log(this.getTagValue());
  }
  deleteTask(key) {
    const tasksArray = this.state.tasksArray.filter(tasksArray => tasksArray.key !== key);
    this.setState({ tasksArray });
  }
  render() {
    return (
      <div>
        <div className="empty-space"></div>
        <div className="columns is-desktop">
          {this.state.tasksArray.map(tasksArray => (
            <Tasks
              title={tasksArray.title}
              description={tasksArray.description}
              key={tasksArray.key}
              tags={tasksArray.tags}
              priority={tasksArray.priority}
              onDelete={key => this.deleteTask(tasksArray.key)}
            />
          ))}
          <div>
            <div className={`modal ${this.state.isOpen ? 'is-active' : ''}`}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Add a task</p>
                  <button className="delete" aria-label="close" onClick={() => this.toggleModal()}></button>
                </header>
                <section className="modal-card-body">
                  <form id="form">
                    <div className="field">
                      <label className="label">Task name</label>
                      <div className="control">
                        <input className="input" 
                          type="text" 
                          placeholder="Enter name of task" 
                          value={this.state.title} 
                          onChange={this.handleTitle} />
                      </div>
                      <p className="help is-danger">*required</p>
                    </div>
                    <div className="field">
                      <label className="label">Description</label>
                      <div className="control">
                        <textarea className="textarea"
                          placeholder="Use this optional textarea to describe and explain the goals of your task."
                          value={this.state.description}
                          onChange={this.handleDescription}></textarea>
                      </div>
                    </div>
                    <label className="label">Subtasks</label>
                    <div className="field">
                      <input className="input is-link subtaskInput is-fullwidth" 
                      type="tags" 
                      placeholder="Add a subtask here" 
                      value={this.state.value} 
                      onChange={this.handleSubtasks} />
                      <p className="help is-danger"></p>
                    </div>
                    <div className="field">
                      <label className="label">Priority</label>
                      <div className="control">
                        <div className="select">
                          <select className="dropdown" 
                            ref={(input) => this.priority = input} 
                            onChange={this.handlePriority} 
                            value={this.state.priorityValue}>
                            <option value="Urgent">Urgent</option>
                            <option value="High Priority">High Priority</option>
                            <option value="Medium Priority">Medium Priority</option>
                            <option value="Low Priority">Low Priority</option>
                            <option value="No Priority">No Priority</option>
                          </select>
                          <p className="help is-danger">*required</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-space"></div>
                  </form>
                </section>
                <footer className="modal-card-foot">
                  <button className="button is-success" onClick={() => this.saveTask()}>Save task</button>
                  <button className="button is-danger" onClick={() => this.cancelModal()}>Cancel</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <p className="field addTask" onClick={() => this.toggleModal()}>
          <a className="button is-success is-large is-rounded is-pulled-right" >
            <span className="icon">
              <i className="fas fa-plus-circle"></i>
            </span>
            <span>Add Tasks</span>
          </a>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));