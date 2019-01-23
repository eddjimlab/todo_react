import React, { Component } from 'react';

import './item-status-filter.css';
//это вариант экспорта сразу класса
// а также сделна именой импорт Component и в вызове написание без React
export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
      return (
        <button type="button"
          className={classNames}
          key={name}
          onClick={() => onFilterChange(name)} >
          {label}
        </button>
      );
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
};


