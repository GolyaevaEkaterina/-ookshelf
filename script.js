const books = [
    {
      title: 'Отверженные',
      authors: 'Виктор Мари Гюго',
      year: '1862',
      image: '/images/Hugo.jpg'
    },
    {
      title: 'Братья Карамазовы',
      authors: 'Федор Михайлович Достоевский',
      year: '1880',
      image: '/images/Dostoevsky.png'
    },
    {
      title:'Мартин Иден',
      authors: 'Джек Лондон',
      year: '1909',
      image:'/images/London.jpeg'
    },
    {
      title:'Герой нашего времени',
      authors: 'Михаил Юрьевич Лермонтов',
      year: 1840,
      image:'/images/Lermontov.jpg'
    },
 

    ]

    const container = document.getElementById("container-books")
    
    books.forEach((book) => {
        container.innerHTML += `
        <div class="book">
           <h3 class="book__title">${book.title}</h3>
           <p class="book__author">${book.authors}</p>
           <p class="book__year">${book.year}</p>
           <img class="book__image" src="${book.image}"/>
           <div class="book__buttons">
             <button class="book__button">Изменить</button>
             <button class="book__button">Удалить</button>
           </div>
        </div>
           `
    })


    let isOpen = false

function openForm(){
    const bookForm = document.getElementById("section-dop")
    
    if (isOpen){
       bookForm.style.display = "flex"
       isOpen = true
    }else{
        bookForm.style.display = "none"
        isOpen = false
    }

  }