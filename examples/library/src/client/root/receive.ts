import { pluck, reduce } from "ramda";
import { Model, Proposal } from "./types";

export function receive(model: Model, proposal: Proposal): Model {
  switch (proposal.type) {
    case "Server.LoadBookList":
      model.inProgress = true;
      break;
    case "Server.LoadedBookList":
      model.inProgress = false;
      model[proposal.section].bookIds = pluck("id", proposal.books);

      model[proposal.section].booksById = reduce((booksById, book) => {
        booksById[String(book.id)] = book;
        return booksById;
      }, {}, proposal.books);
      break;
  }
  return model;
}