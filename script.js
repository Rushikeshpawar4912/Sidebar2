function changeBackground(page) {
    document.body.style.backgroundColor = '';

    if (page === 'home') {
        document.body.style.backgroundColor = 'lightblue'; 
    }
    else if(page === 'Profile'){
        document.body.style.backgroundColor = 'Pink'
    }
    else if(page === 'About us'){
        document.body.style.backgroundColor = 'yellow'
    }
    else if(page === 'Help'){
        document.body.style.backgroundColor = '#7A2048 '
    }
    else if(page === 'Feedback'){
        document.body.style.backgroundColor = '#89ABE3'
    }
    else if(page === 'Services'){
        document.body.style.backgroundColor = 'lightgreen'
    }
    else if(page === 'Email us'){
        document.body.style.backgroundColor = '#FBEAEB'
    }else if(page === 'Gallery'){
        document.body.style.backgroundColor = 'grey'
    }
}


