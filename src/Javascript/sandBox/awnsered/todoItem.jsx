import React from "react";

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (
      <ul onClick={onListClick}>
        {items &&
          items.map((item, index) => (
            <TodoItem
              item={item}
              key={index}
              onClick={this.handleItemClick.bind(this, item)}
            />
          ))}
      </ul>
    );
  }

  handleItemClick(item, event) {
    if (!item.done) {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      return console.log(item);
    }
  }
}

const ToDoItemApp = (props) => (
  <TodoList
    items={props.items}
    onListClick={(event) => console.log("List clicked!")}
    onItemClick={(item, event) => {
      console.log(item, event);
    }}
  />
);

export default ToDoItemApp;
