class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state = this.state * 1.5;
   }

   set state (ratting) {
      if(ratting < 0) {
         this._state = 0;
      } else if(ratting > 100) {
         this._state = 100;
      } else {
         this._state = ratting
      };
   };

   get state () {
      return this._state;
   };
};

class Magazine extends PrintEditionItem {
   type = "magazine";
};

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super (name, releaseDate, pagesCount,);
      this.author = author;
   }
   type = "book"
};

class NovelBook extends Book {
   type = "novel"
}

class FantasticBook extends Book {
   type = "fantastic"
}

class DetectiveBook extends Book {
   type = "detective"
}

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book); 
      }
   }

   findBookBy(type, value) {
      let book = null;
      for (const item of this.books) {
         if(item[type] === value) {
            book = item;
         } 
      }
      return book;
   }
   

   giveBookByName (bookName) {  
      let book = null;
      for (let i = 0; i < this.books.length; i++) {         
         if(this.books[i].name === bookName) {
            book = this.books.splice(i, 1);
            return book[i];
         };
      };
      return book
   };
};


