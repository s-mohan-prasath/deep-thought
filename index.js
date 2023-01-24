let state = {
  taskList: [],
};
console.log()

let parent = document.querySelector(".parent");
let input = document.querySelector(".input-text");
let taskDiv = document.querySelector(".taskDiv");

let taskBody = ({ inputText,id }) => `
    <div class='taskbody'>
        <p class='taskName'>${inputText}</p>
        <button class='delete' id='${id}'onclick='remove()'>delete</button>
    </div>
`;

const updateStorage = () => {
  localStorage.setItem(
    "tasks",
    JSON.stringify({
      tasks: state.taskList,
    })
  );
};

const addTask = () => {
  const id = `${Date.now()}`;
  const inputText = document.getElementById("input-text").value;
  console.log(inputText);
  if (inputText === "") {
    return alert("Please fill the fields");
  } else {
    state.taskList.push({ inputText, id });
    console.log(state.taskList);
  }
  console.log(state.taskList);
  taskDiv.insertAdjacentHTML("beforeend", taskBody({inputText,id}));
  inputText = ''
  updateStorage();
};
const remove = () => {

}

const deleteAll = () => {
  taskDiv.innerHTML = "";
  localStorage.clear();
  state.taskList = [];
};
const loadInitialData = () => {
  const localStorageCopy = JSON.parse(localStorage.tasks);
  console.log(localStorageCopy);
  if (localStorageCopy) {
    state.taskList = localStorageCopy.tasks;
    console.log(state.taskList.inputText);
    state.taskList.map((cardDate) => {
      taskDiv.insertAdjacentHTML("beforeend", taskBody(cardDate));
    });
  }
};