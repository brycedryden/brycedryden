// Part 1: Customize the page
function updatePage()
{
    let greeting = document.getElementById("greeting");
    let message = document.getElementById("message");
    let name = document.getElementById("nameInput").value;
    let newMessage = document.getElementById("messageInput").value;
    let color = document.getElementById("colorSelect").value;

    if (name != "") // Only change the greeting if the user typed a name
    {
        greeting.textContent = "Hello " + name + "!";
    }

    if (newMessage != "") // Only change the message if the user typed one
    {
        message.textContent = newMessage;
    }

    document.body.style.backgroundColor = color;
}

// Extra Credit: To Do List
function addTodo()
{
    let input = document.getElementById("todoInput");
    let list = document.getElementById("todoList");

    if (input.value != "") // Don't add empty items
    {
        let item = document.createElement("li");
        item.textContent = input.value;
        list.appendChild(item);
        input.value = ""; // Clear the text box
    }
}
