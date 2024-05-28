import { sortTodosByTitle } from '../sort-todos-by-title';
import { todos } from './fixtures/todos';

describe('sortTodosByTitle', () => {
  it('should return todos sorted by title', () => {
    const fixture = [...todos].reverse();
    const expectedResult = todos;

    const result = sortTodosByTitle(fixture);

    expect(result).toStrictEqual(expectedResult);
  });
});
