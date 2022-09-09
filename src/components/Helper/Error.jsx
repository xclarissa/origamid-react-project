import React from "react";

function Error({error}) {
  if (!error) return null;
  return <p style={{color: '#f31', margin: '1rem 0'}}>Erro: {error}</p>;
}

export default Error;
