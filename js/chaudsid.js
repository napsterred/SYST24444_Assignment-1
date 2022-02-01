function saveData(e){

    const name = document.querySelector('#name').value

    const email = document.querySelector('#email').value

    const price = document.querySelector('#paintQ').value

    const colour = document.querySelector('#paint').value

    const room = document.querySelector('#room').value

    const roomL = document.querySelector('#roomL').value   
    const roomW = document.querySelector('#roomW').value  

    const quantity = document.querySelector('#quantityofitems').value

    let orderData = {

        name,

        email,

        price,

        colour,

        room,

        roomL,
        roomW,

        quantity,

        

    }

    console.log(orderData)

    localStorage.setItem('data',JSON.stringify(orderData))

}

function gotoNext(){

    saveData()

    location.href ='./pages/quote.html'

}


