let books = [
    {
      id: 1,
      title: 'Отверженные',
      authors: 'Виктор Мари Гюго',
      year: '1862',
      image: '/images/Hugo.jpg'
    },
    {
      id: 2,
      title: 'Братья Карамазовы',
      authors: 'Федор Михайлович Достоевский',
      year: '1880',
      image: '/images/Dostoevsky.png'
    },
    {
      id: 3,
      title:'Мартин Иден',
      authors: 'Джек Лондон',
      year: '1909',
      image:'/images/London.jpeg'
    },
    {
      id: 4,
      title:'Герой нашего времени',
      authors: 'Михаил Юрьевич Лермонтов',
      year: 1840,
      image:'/images/Lermontov.jpg'
    },
 

    ]

const container = document.getElementById("container-books")
    
function renderBooks(){
  container.innerHTML = ""
  books.forEach((book) => {
    container.innerHTML += `
    <div class="book">
       <h3 class="book__title">${book.title}</h3>
       <p class="book__author">${book.authors}</p>
       <p class="book__year">${book.year}</p>
       <img class="book__image" src="${book.image}"/>
       <div class="book__buttons">
         <button class="book__button ">Изменить</button>
         <button onclick="deleteBook(${book.id})" class="book__button book__button_delete">Удалить</button>
       </div>
    </div>
       `
  })
}

function addToLocalStorage(){
  const booksJson = JSON.stringify (books)
  localStorage.setItem("books", booksJson)  //Какая разница между "" и '' ?//
}

function openForm(){
    const bookForm = document.getElementById("Form")
    
    bookForm.style.display = "flex"   
}

function closeForm(){
  const bookForm = document.getElementById("Form")
  
  bookForm.style.display = "none"   
}

function clearForm(){
  document.getElementById('bookTitle').value = ""
  document.getElementById('bookAutor').value = ""
  document.getElementById('bookYear').value = ""
  document.getElementById('bookImage').value = ""
}

function addBook(){
  const Title = document.getElementById('bookTitle').value
  const Autor = document.getElementById('bookAutor').value
  const Year = document.getElementById('bookYear').value
  const Image = document.getElementById('bookImage').value
  
  const book = {
      title: Title,
      authors: Autor,
      year: Year,
      image: Image,
  }

  books.push(book)

  renderBooks()
  closeForm()
  clearForm()

  addToLocalStorage()
}

function deleteBook(id){
  const book = books.find((b) => {
    return b.id === id
  })

  const bookIndex = books.indexOf(book)

  books.splice(bookIndex, 1)

  renderBooks()

  addToLocalStorage() 
}

const booksJson = localStorage.getItem("books")
const savedBooks = JSON.parse (booksJson)
if (booksJson) {
  books = savedBooks
}
renderBooks()

const buttonOpenForm = document.getElementById('OpenForm-button')
buttonOpenForm.addEventListener('click', openForm)

const buttonCloseForm = document.getElementById('Form__Close-button')
buttonCloseForm.addEventListener('click', closeForm)

const buttonAddBook = document.getElementById('Form__Add-book')
buttonAddBook.addEventListener('click', addBook)

//const buttonDeleteBook = document.getElementsByClassName('book__button_delete')
//buttonDeleteBook.addEventListener('click', deleteBook)// -- не работает код