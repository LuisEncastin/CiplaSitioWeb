import React from 'react'

const ContratoComponent = ({
    flag,
    nombreContrato,
    descripcionContrato,
    estilo,
    handleContractModal,
}) => {
  return (
    <>
        <li id={flag} class={estilo}>
            <h2>{nombreContrato}</h2>
            <hr style={{border: '0.3px solid #2F89FC', width: '70%'}} />
            <p>{descripcionContrato}</p>
            <button onClick={handleContractModal}>Ver contrato.</button>
        </li>   
    </>
  )
}

export default ContratoComponent