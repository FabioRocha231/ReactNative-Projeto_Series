const SET_FIELD = 'SET_FIELD';
const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

const saveSerie = (serie) => {
  console.log('Aqui vamos salvar nossa serie', serie);
};

export { SET_FIELD, setField, saveSerie };
