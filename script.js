let counter = 1
let currentEditBookId 

let books = [
    {
      id: counter++,
      title: 'Отверженные',
      authors: 'Виктор Мари Гюго',
      year: '1862',
      image: '/images/Hugo.jpg'
    },
    {
      id: counter++,
      title: 'Братья Карамазовы',
      authors: 'Федор Михайлович Достоевский',
      year: '1880',
      image: '/images/Dostoevsky.png'
    },
    {
      id: counter++,
      title:'Мартин Иден',
      authors: 'Джек Лондон',
      year: '1909',
      image:'/images/London.jpeg'
    },
    {
      id: counter++,
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
      console.log(book.id)
      container.innerHTML += `
      <div class="book">
         <h3 class="book__title">${book.title}</h3>
         <p class="book__author">${book.authors}</p>
         <p class="book__year">${book.year}</p>
         <img class="book__image" src="${book.image}"/>
         <div class="book__buttons">
           <button class="book__button" id="editBook__Open-form-${book.id}">Изменить</button>
           <button class="book__button" id="deleteBook__button-${book.id}">Удалить</button>
         </div>
      </div>
         `
    })

    books.forEach((book) => {
      const buttonDeleteBook = document.getElementById(`deleteBook__button-${book.id}`)
      const makeDeleteBook = () => deleteBook(book.id)
      buttonDeleteBook.addEventListener('click', makeDeleteBook)

      

      const buttonOpenFormEditBook = document.getElementById(`editBook__Open-form-${book.id}`)
      buttonOpenFormEditBook.addEventListener('click', () => {
        currentEditBookId = book.id
        openModalEditBook()
      })
    })

  }

function addToLocalStorage(){
    const booksJson = JSON.stringify (books)
    localStorage.setItem("books", booksJson) 
}

function openModalNewBook(){
    const bookForm = document.getElementById("newBook")
    bookForm.style.display = "flex"   
}

function closeModalNewBook(){
    const bookForm = document.getElementById("newBook")
    bookForm.style.display = "none"   
}

function openModalEditBook(){
    const bookEditForm = document.getElementById("editBook")
    bookEditForm.style.display = "flex"
    
    const book = books.find((b) => {
      return b.id === currentEditBookId 
    })

    document.getElementById('bookTitleEdit').value = book.title
    document.getElementById('bookAuthorEdit').value = book.authors
    document.getElementById('bookYearEdit').value = book.year
    document.getElementById('bookImageEdit').value = book.image
}

function closeModalEditBook(){
    const bookEditForm = document.getElementById("editBook")
    bookEditForm.style.display = "none"   
}

function editBook(){
  console.log(currentEditBookId)

  const title = document.getElementById('bookTitleEdit').value
  const author = document.getElementById('bookAuthorEdit').value
  const year = document.getElementById('bookYearEdit').value
  const image = document.getElementById('bookImageEdit').value
  
  const editedBook = {
    id: currentEditBookId,
    title: title,
    authors: author,
    year: year,
    image: image,
  }

  const book = books.find((b) => {
    return b.id === currentEditBookId
  })
  
  const bookIndex = books.indexOf(book)

  books.splice(bookIndex, 1, editedBook)

  renderBooks()
  closeModalEditBook()
  addToLocalStorage()
}

function clearForm(){
    document.getElementById('bookTitle').value = ""
    document.getElementById('bookAuthor').value = ""
    document.getElementById('bookYear').value = ""
    document.getElementById('bookImage').value = ""
}

function addBook(){
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const year = document.getElementById('bookYear').value
    const image = document.getElementById('bookImage').value
  
    const book = {
      id: counter++,
      title: title,
      authors: author,
      year: year,
      image: image,
    }

    books.push(book)

    renderBooks()
    closeModalNewBook()
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

const buttonOpenFormNewBook = document.getElementById('newBook__Open-button')
buttonOpenFormNewBook.addEventListener('click', openModalNewBook)

const buttonCloseFormNewBook = document.getElementById('newBook__Close-button')
buttonCloseFormNewBook.addEventListener('click', closeModalNewBook)

const buttonAddBook = document.getElementById('newBook__Add-book')
buttonAddBook.addEventListener('click', addBook)




const buttonCloseFormEditBook = document.getElementById('editBook__Close-button')
buttonCloseFormEditBook.addEventListener('click', closeModalEditBook)

const buttonEditBook = document.getElementById('editBook__button-add')
buttonEditBook.addEventListener('click', editBook)