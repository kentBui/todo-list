import React, { Component } from "react";
import "./App.css";
import FormInputTodo from "./components/FormInputTodo";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import SortAndSearch from "./components/SortAndSearch";
import { v4 as uuidv4 } from "uuid";

const data = [
  { id: 1, task: "ahha", level: "1" },
  { id: 2, task: "acac", level: "0" },
  { id: 3, task: "qfqf", level: "2" },
];

class App extends Component {
  state = {
    items: [...data],
    renderItems: [...data],
    isAddTask: false,
    taskName: "",
    levelValue: "0",
    id: uuidv4(),
    searchInput: "",
    nameSort: "Name ASC",
  };

  addTask = () => {
    this.setState({
      isAddTask: true,
    });
  };

  hadleChange = (e) => {
    let value = e.target.value;
    this.setState({
      taskName: value,
    });
  };

  hadleChangeSelected = (e) => {
    this.setState({
      levelValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { items } = this.state; // chu y doan nay
    let tempItem = {
      id: this.state.id,
      task: this.state.taskName,
      level: this.state.levelValue,
    };

    this.setState({
      items: [...items, tempItem],
      renderItems: [...items, tempItem],
      taskName: "",
      id: uuidv4(),
    });
  };

  cancel = () => {
    this.setState({
      isAddTask: false,
    });
  };

  editItem = (id, index) => {
    let { items } = this.state;
    let newItems = items.filter((item) => item.id !== id);
    let tempItem = items.find((item) => item.id === id);
    console.log(tempItem);
    this.setState({
      items: newItems,
      renderItems: newItems,
      isAddTask: true,
      taskName: tempItem.task,
      id: id,
    });
  };

  deleteItem = (id, index) => {
    console.log(index);
    let { items } = this.state;
    items.splice(index, 1);
    this.setState({
      items: items,
      renderItems: items,
    });
  };

  handleDropdown = (item) => {
    console.log(item);
    let { renderItems } = this.state;
    switch (item) {
      case "Level ASC":
        renderItems.sort((a, b) => a.level - b.level);
        break;
      case "Level DESC":
        renderItems.sort((a, b) => b.level - a.level);
        break;
      case "Name ASC":
        renderItems.sort((a, b) => a.task.toUpperCase() - b.task.toUpperCase());
        console.log(222);
        break;
      case "Name DESC":
        renderItems.sort((a, b) => b.task.toUpperCase() - a.task.toUpperCase());
        break;
      default:
        break;
    }
    console.log("renderItem sorted", renderItems);
    this.setState({
      nameSort: item,
    });
  };

  handleSearch = (e) => {
    let value = e.target.value;
    let { items } = this.state;
    let tempItems = items.filter((item) => item.task.indexOf(value) !== -1);
    console.log(tempItems);
    this.setState({
      renderItems: tempItems,
      searchInput: value,
    });
  };

  clear = () => {
    this.setState({
      renderItems: [...this.state.items],
      searchInput: "",
    });
  };

  render() {
    console.log("items", this.state.items);
    console.log("renderItems", this.state.renderItems);

    const { isAddTask, taskName } = this.state;

    const {
      addTask,
      cancel,
      hadleChange,
      handleSubmit,
      hadleChangeSelected,
    } = this;

    const formInputProps = {
      taskName,
      isAddTask,
      cancel,
      addTask,
      hadleChange,
      handleSubmit,
      hadleChangeSelected,
    };

    const { renderItems } = this.state;

    const { editItem, deleteItem } = this;

    const listItemsProps = {
      renderItems,
      editItem,
      deleteItem,
    };

    const { searchInput, nameSort } = this.state;

    const { handleSearch, clear, handleDropdown } = this;

    const sortAndSerchProps = {
      nameSort,
      searchInput,
      handleSearch,
      clear,
      handleDropdown,
    };

    return (
      <div className="container">
        <Header />
        <div className="row">
          <SortAndSearch {...sortAndSerchProps} />
          <FormInputTodo {...formInputProps} />
          <ListItems {...listItemsProps} />
        </div>
      </div>
    );
  }
}

export default App;
