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
            <span data=${i} class="task" id=${i}>Shoping</span>
        </div>
        <div class="col-3 bg-info rounded-right d-flex justify-content-center align-items-center py-3"><i
                class="fas fa-save"></i></div>
        </div>
        `
        $('.container').append(testDiv)
    }

    // change span into textarea

    $('.col-6').on('click', 'span', (e) => {
        let text = $(this).text().trim();
        let taskID = $(e.target).attr('data')
        let spanID = e.target.id
        let span = $('.col-6')

        // if (taskID === spanID) {
        // const textarea = $('<textarea>').text(text);
        // $(span).replaceWith(textarea);
        // console.log(text);
        // }

        span.each((index, e) => {
            if (span[index].id === taskID) {
                const textarea = $('<textarea>').text(text);
                $(span).replaceWith(textarea);
                console.log(text);
            }
        })

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
    // const getTask = () => {

    // }

    // save button
    $('.fas').on('click', () => {
        // save input
        saveTask(text);

    })


})




