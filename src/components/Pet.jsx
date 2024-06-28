import React from 'react';

function Pet() {
  return (
    <div className="Pet">
      <h1>Міка</h1>
      <h2>Хом'як</h2>
      <p>Вік: 2 роки</p>
      <p>Порода: джунгарік</p>
      <div className="pet-photo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFS5nJlzrn4CEnuRfG91PhQjPUktSVasqgA&s' alt='' />
      </div>
    </div>
  );
}

export default Pet;
