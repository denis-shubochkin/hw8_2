export default class ErrorRepository {
  constructor() {
    this.map = new Map([[10, 'Ошибка памяти'], [20, 'Ошибка ввода']]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }

    return 'Unknown error';
  }
}
