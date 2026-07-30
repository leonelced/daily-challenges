type Book = {
  id: string;
  title: string;
  borrowed: boolean;
};


// My solution

export class LibraryCatalog {
  private books: Book[];

  constructor(public name: string) {
    this.books = [];
  }

  public addBook(id: string, title: string): boolean {
    if (!this.isValidText(id) || 
        !this.isValidText(title) || 
        this.findBook(id)) {
      return false;
    }
    this.books.push({id, title, borrowed: false});
    return true;
  }

  public borrowBook(id: string): boolean {
    const book = this.findBook(id);
    if (!book || book.borrowed === true) {
      return false;
    }
    book["borrowed"] = true;
    return true;
  }

  public returnBook(id: string): boolean {
    const book = this.findBook(id);
    if (!book || book.borrowed === false) {
      return false;
    }
    book["borrowed"] = false;
    return true;
  }

  public availableTitles(): string[] {
    const titles = []
    for(const book of this.books) {
      if (!book.borrowed) {
        titles.push(book.title);
      }
    }
    return titles;
  }

  private findBook(id: string): Book | undefined {
    for(const book of this.books) {
      if (book.id === id) return book;
    }
    return undefined;
  }

  private isValidText(value: string): boolean {
    return value.trim().length > 0; 
  }
}


// https://www.boot.dev/challenges/c414642e-5909-41d1-80ad-afe7e8d5cb70