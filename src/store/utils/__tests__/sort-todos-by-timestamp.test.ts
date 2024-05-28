import { sortTodosByTimestamp } from '../sort-todos-by-timestamp';
import { todos } from './fixtures/todos';

describe('sortTodosByTimestamp', () => {
  it('should return todos sorted by timestamp', () => {
    const fixture = [...todos].reverse();
    const expectedResult = todos;

    const result = sortTodosByTimestamp(fixture);

    expect(result).toStrictEqual(expectedResult);
  });
});
