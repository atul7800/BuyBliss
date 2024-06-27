/*******************References start********************/

//Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Sidebar
const menuItems = document.querySelectorAll('.menu-item');

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

/*---------------------Theme customization end----------------------*/
