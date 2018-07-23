import _ from 'lodash';
import BookModel from '../models/BookModel';

class BookFacade {
  static async add(book) {
    if (_.isEmpty(book)) return 'No input specified';
    if (_.isEmpty(book.name)) return 'Please input book name';

    const bookData = await BookModel.getOneByBookname(book.name);
    if (!_.isEmpty(bookData)) return 'Book name already exists';

    return true;
  }

  static async update(id, book) {
    if (_.isEmpty(book)) return 'No input specified';
    if (_.isEmpty(id)) return 'No bookid specified';

    const bookData = await BookModel.getOneById(id);
    if (_.isEmpty(bookData)) return 'Bookid is not exists';

    return true;
  }
}

export default BookFacade;
