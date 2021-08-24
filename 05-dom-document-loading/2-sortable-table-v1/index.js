export default class SortableTable {
  element;
  subElements = {};

  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = Array.isArray(data) ? data : data.data;
    this.render();
  }

  sort(fieldValue, orderValue = 'asc') {
    const sortedArray = [...this.data];
    const direction = {
      'asc': 1,
      'desc': -1
    };
    const sortFunctions = {
      'number': (a, b) => a - b,
      'string': (a, b) => a.localeCompare((b), ['ru', 'en'])
    };
    const sortType = this.headerConfig.find((headerValue) => headerValue.id === fieldValue).sortType;
    sortedArray.sort((a, b) => direction[orderValue] * sortFunctions[sortType](a[fieldValue], b[fieldValue]));
    this.update(sortedArray);
  }

  getHeader() {
    return (
      `<div class = "sortable-table__header sortable-table__row">
         ${this.headerConfig.map((headerItem) => this.getHeaderCell(headerItem)).join('')}
       </div>`
    );
  }

  getHeaderCell({title}) {
    return (
      `<div class="sortable-table__cell" data-id="images" data-sortable="false" data-order="">
        <span>${title}</span>

      <span data-element="arrow" class="sortable-table__sort-arrow">
        <span class="sort-arrow"></span>
      </span>
      </div>`
    );
  }

  getCell(dataValue, template) {
    return (
      template
        ? template(dataValue)
        : `<div class="sortable-table__cell">${dataValue}</div>`
    );
  }

  getRow(dataRow) {
    const cell = this.headerConfig
      .map(({id, template}) => this.getCell(dataRow[id], template))
      .join('');
    return (`<div class="sortable-table__row">${cell}</div>`);
  }

  getBody() {
    return (
      this.data.map((dataRow) => this.getRow(dataRow))
    );
  }

  getTable() {
    return (
      `<div class="sortable-table">
         ${this.getHeader()}
         <div class="sortable-table__body" data-role="body">
           ${this.getBody().join('')}
         </div>
      </div>`
    );
  }

  update(sortedData) {
    this.data = sortedData;
    if (!this.subElements?.body) {
      this.subElements = {
        body: document.querySelector('[data-role="body"]')
      };
    }
    this.subElements.body.innerHTML = this.getBody().join('');
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.getTable();
    this.element = element.firstElementChild;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}

