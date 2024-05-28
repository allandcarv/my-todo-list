import { sortTodosByDone } from '../sort-todos-by-done';
import { todos } from './fixtures/todos';

describe('sortTodosByDone', () => {
  it('should return todos sorted by done', () => {
    const expectedResult = [...todos].reverse();

    const result = sortTodosByDone(todos);

    expect(result).toStrictEqual(expectedResult);
  });
});
