// task array
let tasks;
// current date
let now = moment().format('dddd, MMMM Do');
$('#currentDay').append(now);

// change span into textarea
$('.col-6').on('click', () => {

    // grab text from span
    const text = $(this).text().trim();

    // replace span with textarea
    const textInput = $('<textarea>').addClass('form-control').val(text);
    $('.col-6 span').replaceWith(textInput);

    // auto focus new element
    textInput.trigger('focus');
    saveTask(text);
});

// edit field
$('.col-6').on('blur', () => {

    // grab text from span
    const text = $(this).text().trim();

    // replace textarea with span
    const span = $('<span>').text(text);
    $(textInput).replaceWith(span);

    // display task
    getTask(text);
});

// get task
const getTask = (task) => {
    const localStorageGetItem = localStorage.getItem('tasks');
    if (localStorageGetItem === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorageGetItem);
    }

    tasks.push(task);
}

// save task
const saveTask = (task) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// save button
$('.fas').on('click', () => {
    // save input
    saveTask();

})

