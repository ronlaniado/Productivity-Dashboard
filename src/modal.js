import React from 'react';
import './style.css';
import './bulma.css';
import './fontawesome-all';
import Tasks from './tasks';

export default class Modal extends React.Component {
  tagifyInputs = [];
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: '',
      time: '',
      description: '',
      subtasks: [],
      priority: '',
      hour: '',
      minute: '',
      value: this.state
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubtasks = this.handleSubtasks.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleMinute = this.handleMinute.bind(this);
    this.handleHour = this.handleHour.bind(this);
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
  getTagValue() {
    return this.tagifyInputs[0].getValue();
  }
  handleTitle(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  }
  handleTime(event) {
    event.preventDefault();
    this.setState({

    });
  }
  handleDescription(event) {
    event.preventDefault();
    this.setState({
      description: event.target.value,
    });
  }
  handleSubtasks(event) {
    console.log(event.target);
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
  handleHour(event) {
    event.preventDefault();
    this.setState({
      hour: event.target.value
    });
  }
  handleMinute(event) {
    event.preventDefault();
    this.setState({
      minute: this.state.hour + ':' + event.target.value
    });
  }
  handleTime(event) {
    event.preventDefault();
    this.setState({
      time: this.state.minute + " " + event.target.value
    });
  }
  saveTask() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.title);
    console.log(this.state.time);
    console.log(this.state.description);
    console.log(this.state.subtasks);
    console.log(this.getTagValue());
    console.log(this.state.priority);
    return <Tasks title={this.state.title} time={this.state.time} description={this.state.description}/>;
  }
  deleteTask() {
    const tasksArray = this.state.tasksArray.filter(tasksArray => tasksArray.key !== key);
    this.setState({tasksArray});
  }
  render() {
    return (
      <div>
        <div className={`modal ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Add a task</p>
              <button className="delete" aria-label="close" onClick={() => this.toggleModal()}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Task name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Enter name of task" value={this.state.value} onChange={this.handleTitle} />
                </div>
                <p className="help is-danger">This field is required</p>
              </div>
              <div className="field">
                <label className="label">Time of task</label>
                <div className="control">
                  <div className="select">
                    <select className="dropdown" value={this.state.value} onChange={this.handleHour}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>:
                    <select className="dropdown" value={this.state.value} onChange={this.handleMinute}>
                      <option>00</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                      <option>32</option>
                      <option>33</option>
                      <option>34</option>
                      <option>35</option>
                      <option>36</option>
                      <option>37</option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                      <option>41</option>
                      <option>42</option>
                      <option>43</option>
                      <option>44</option>
                      <option>45</option>
                      <option>46</option>
                      <option>47</option>
                      <option>48</option>
                      <option>49</option>
                      <option>50</option>
                      <option>51</option>
                      <option>52</option>
                      <option>53</option>
                      <option>54</option>
                      <option>55</option>
                      <option>56</option>
                      <option>57</option>
                      <option>58</option>
                      <option>59</option>
                    </select>
                    <select className="dropdown" value={this.state.value} onChange={this.handleTime}>
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Use this optional textarea to describe and explain the goals of your task." value={this.state.value} onChange={this.handleDescription}></textarea>
                </div>
              </div>
              <label className="label">Subtasks</label>
              <div className="field">
                <input className="input is-link subtaskInput is-fullwidth" type="tags" placeholder="Add a subtask here" value={this.state.value} onChange={this.handleSubtasks} />
              </div>
              <div className="field">
                <label className="label">Priority</label>
                <div className="control">
                  <div className="select" value={this.state.value} onChange={this.handlePriority}>
                    <select>
                      <option>Urgent</option>
                      <option>High Priority</option>
                      <option>Medium Priority</option>
                      <option>Low Priority</option>
                      <option>No Priority</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={() => this.saveTask()}>Save task</button>
              <button className="button is-danger" onClick={() => this.toggleModal()}>Cancel</button>
            </footer>
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
