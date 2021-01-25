$(document).ready(() => {

    // task array
    let tasks;

    // current date
    let now = moment().format('dddd, MMMM Do');
    $('#currentDay').append(now);

    // display time blocks
    var startTime = moment().hours(9).minutes(0).seconds(0)
    for (let i = 0; i < 10; i++) {
        startTime.add('hour', 1);
        let testDiv = `
        <div class="row d-flex justify-content-center align-items-center">
        <div class="col-3 text-right bg-danger">
            <span>${startTime.format('hh A')}</span>
        </div>
        <div class="col-6 text-center">
            <span data=${i} class="task" id=${i}>Go to gym</span>
        </div>
        <div class="col-3 bg-info rounded-right d-flex justify-content-center align-items-center py-3"><i
                class="fas fa-save"></i></div>
        </div>
        `
        $('.container').append(testDiv)
    }

    // change span into textarea

    $(document).on('click', 'span.task', function () {
        let text = $(this).text().trim();
        let span = $(this).closest('.col-6')
        const textarea = $('<textarea>').text(text);
        $(span).html(textarea);
        textarea.trigger('focus');
    });

    $(document).on('blur', 'textarea', function () {
        let text = $(this).val();
        let textarea = $(this).closest('.col-6')
        const span = $('<span>').text(text);
        $(textarea).html(span);
        saveTask(text)
    });

    // save task
    const saveTask = (task) => {
        const localStorageGetItem = localStorage.getItem('tasks');
        if (localStorageGetItem === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorageGetItem);
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // get task
    const getTask = () => {
        const localStorageGetItem = localStorage.getItem('tasks');
        if (localStorageGetItem === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorageGetItem);
            $('span.task').append(tasks);
        }
    }
    getTask();

    // save button
    $('.fas').on('click', () => {
        // save input
        saveTask();
    })


})




