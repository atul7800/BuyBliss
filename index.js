/*******************References start********************/

//Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Sidebar
const menuItems = document.querySelectorAll('.menu-item');

//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const coloPalate = document.querySelectorAll('.choose-color span');

/*******************References end**********************/


/*====================Sidebar====================*/
//remove active class from all menu items 
const changActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
//

//Notifications
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changActiveItem();
        item.classList.add('active');

        //hide/show notification popup
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        } else{
            document.querySelector('.notification-popup').style.display = 'block'; 
            //remove notification count
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})
/*---------------------Sidebar end----------------------*/

/*=====================Messages=====================*/
//search messages
const searchMessage = () => {
    const value = messageSearch.value.toLowerCase();
    let noOfMessagesFound=0;
    message.forEach(chat => {
      let name = chat.querySelector('h5').textContent.toLowerCase();
      if(name.indexOf(value) != -1){
        chat.style.display = 'flex';
        noOfMessagesFound++;
        console.log('noOfMessagesFound = ' + noOfMessagesFound);
      } else{
        chat.style.display = 'none';
      }

      // show no result found
      if(noOfMessagesFound == 0){
        document.getElementById('no-result-found').style.display = 'block';
      } else{
        document.getElementById('no-result-found').style.display = 'none'
      }
    })
}

messageSearch.addEventListener('keyup', searchMessage);
//message search end

//highlight messages when message menu-item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
    messagesNotification.querySelector('.notification-count').style.display = 'none';
})
//highlight end

/*---------------------Messages end-----------------*/

/*=======================Theme customization========================*/
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

/*++++++++++++++Fonts+++++++++++*/

//remove active class
const removeActiveClass = (x) => {
    x.forEach(z => {
        z.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    let fontSize;
    size.addEventListener('click', () => {
        removeActiveClass(fontSizes);
        if(size.classList.contains('font-size-1')){
            // root.style.setProperty('--sticky-top-left', '5.5rem');
            // root.style.setProperty('--sticky-top-right', '5.5rem');
            fontSize = '10px';
            size.classList.add('active');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            size.classList.add('active');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            size.classList.add('active');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            size.classList.add('active');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            size.classList.add('active');
        } else{
            
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})
/*____________Fonts end_________*/

/*++++++++++++++Color+++++++++++*/
coloPalate.forEach(color => {
    let primary;
    color.addEventListener('click', () => {
        removeActiveClass(coloPalate)
        if(color.classList.contains('color-1')){
            primary = 252;
            color.classList.add('active');
        } else if(color.classList.contains('color-2')){
            primary = 52;
            color.classList.add('active');
        } else if(color.classList.contains('color-3')){
            primary = 352;
            color.classList.add('active');
        } else if(color.classList.contains('color-4')){
            primary = 152;
            color.classList.add('active');
        } else if(color.classList.contains('color-5')){
            primary = 202;
            color.classList.add('active');
        } else{
            
        }
        root.style.setProperty('--primary-color-hue', primary);
        //document.querySelector('html').style.
    })
})
/*____________Color end_________*/

/*++++++++++++++Background+++++++++++*/

/*____________Background end_________*/

/*---------------------Theme customization end----------------------*/
