import { Todo } from "./Todo";
export class List {
  public static create(title: string): List {
    return new List(title, new Date, []);
  }

  protected constructor(
    public readonly title: string,
    public readonly created: Date,
    public readonly todos: Todo[]
  ) {}

}
