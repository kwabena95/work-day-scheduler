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

    $('.col-6').on('click', (e) => {
        let taskID = $(e.target).attr('data')
        let spanID = e.target.id
        let span = $('.col-6 span')
        console.log(span)

        if (taskID === spanID) {
            const textInput = $('<textarea>').addClass('form-control');
            span.replaceWith(textInput);
            console.log('data: ', taskID)
            console.log('id: ', spanID)
        } else {

            console.log('false')
        }

        // span.each(index =>{})



        // if (taskID === $('span')) {
        //     // replace span with textarea
        //     const textInput = $('<textarea>').addClass('form-control');
        //     $('.col-6 data').replaceWith(textInput);
        // }





        // // auto focus new element
        // textInput.trigger('focus');
        // saveTask(text);

        // console.log(e.target.id);


        // console.log($(e.currentTarget).hasClass('task1') == e.currentTarget.id)
        // console.log(e.currentTarget.id)

    });

    // document.querySelectorAll('.task').forEach((i) => {
    //     i.addEventListener('click', (e) => {
    //         console.log(e.target.getAttribute('data'))
    //         var textarea = document.createElement('textarea')
    //         console.log(textarea)
    //     })
    // })


    // $('<div/>', {
    //     class: 'row d-flex justify-content-center align-items-center'
    // }).appendTo('#mySelector');





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


})




