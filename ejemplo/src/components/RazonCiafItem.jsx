import React from 'react';

export const RazonCiafItem = ({ numero, titulo, imagen, leyenda, autor, texto }) => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>{numero}</button>
      <p style={styles.title}>{titulo}</p>
      <img src={imagen} style={styles.imagen} />
      <p style={styles.textLegend}>{leyenda}</p>
      <p style={styles.title}>{autor}</p>
      <p>{texto}</p>
    </div>
  );
};

const styles = {
  button: {
    background: '#001f79',
    borderRadius: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    height: 50,
    width: 50,
    cursor: 'none',
    border: 'none',
    color: 'white',
  },
  title: {
    color: '#001f79',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagen: {
    width: 100,
    borderRadius: '50%',
  },
  textLegend: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    padding: 15,
    margin: 20,
  },
};