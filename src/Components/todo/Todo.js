import React, { Component } from 'react'
import TodoForm from './todoForm/TodoForm';
import { connect } from 'react-redux';
import TodoLIst from './todoList/TodoLIst';
import {
    getTasksOperation,
    postTasksOperation,
    deleteTasksOperation,
    setImportantTasksOperation
} from '../../redux/operations/todoOperations';
import { getNewTodoItemsSelector, getTodoItemsSelector } from '../../redux/selectors/todoSelectors';
import { getLoaderSelector } from '../../redux/selectors/loaderSelector';
import { getErrorSelector } from '../../redux/selectors/errorSelector';


class Todo extends Component {
    state = {}

    componentDidMount() {
        this.props.getTasksOperation();
    }

    render() {
        const { todoItems, postTasksOperation, deleteTasksOperation, setImportantTasksOperation } = this.props;
        return (
            <>
                <TodoForm postTasksOperation={postTasksOperation} />
                {this.props.error && <h2>{this.props.error}</h2>}
                <TodoLIst todoItems={todoItems} deleteTask={deleteTasksOperation} checkImportant={setImportantTasksOperation} />
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    todoItems: getTodoItemsSelector(state), //[{}, {}, {}]
})

const mapDispatchToProps = {
    getTasksOperation, postTasksOperation, deleteTasksOperation, setImportantTasksOperation
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

