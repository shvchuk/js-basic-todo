/**
 * Created by Andrzej on 2017-05-25.
 */
// JQuery and a little bit of Lodash improvement
var inputEl = $('input');
var buttonEl = $('button');
var ulEl = $('ul');

var todos = [];

buttonEl.click(addTodo);

function addTodo(){
    var userInput = inputEl.val();
    if (userInput.trim() == ''){
        return;
    }
    var newTodo = { id: _.uniqueId(), value: userInput};
    todos.push(newTodo);
    $('<li>'+ userInput +'</li>')
        .appendTo(ulEl)
        .attr('dataset-id', newTodo.id)
        .click(removeTodo);
    console.log(todos);
}

function removeTodo(event){
    var clickedLi = $(this);
    var itemId = clickedLi.attr('dataset-id');
    for(var i = 0; i < todos.length; i++){
        if(todos[i].id == itemId){
            todos.splice(i, 1);
            break;
        }
    }
    clickedLi.remove();
    console.log(todos);
}