import ErrorRepository from '../ErrorRepository';

test('error found 1', () => {
  const err = new ErrorRepository();
  const result = err.translate(10);
  expect(result).toBe('Ошибка памяти');
});

test('error found 2', () => {
  const err = new ErrorRepository();
  const result = err.translate(20);
  expect(result).toBe('Ошибка ввода');
});

test('error not found', () => {
  const err = new ErrorRepository();
  const result = err.translate(30);
  expect(result).toBe('Unknown error');
});
