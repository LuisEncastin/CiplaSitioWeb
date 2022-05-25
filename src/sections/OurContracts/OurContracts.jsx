import React, {useState} from 'react'
import ContratoComponent from '../../Components/ContratoComponent'
import LandingContractComponent from '../../Components/LandingContractComponent'

// styles
import './OurContracts.css'

const OurContracts = () => {

    const infoContratos = [
        {
            flag: 'contratoDefaultMessage',
            nombreContrato: 'CIPLA Abogados S.C.',
            descripcionContrato: 'En esta sección podrás encontrar varios contratos que te pueden ser de utilidad en el ámbito del derecho laboral.',
        },
        {
            flag: 'contratoa',
            nombreContrato: 'Contrato Individual de Trabajo por Tiempo Determinado',
            descripcionContrato: 'Es aquel que constituye una excepción a la estabilidad en el empleo y se deberá aplicar únicamente cuando lo exija la naturaleza del trabajo que se va a prestar o cuando se tenga por objeto sustituir temporalmente a otro trabajador (por ejemplo, incapacidades), debiéndose justificar el porqué de la eventualidad, de manera fehaciente y precisa.',
        },
        {
            flag: 'contratob',
            nombreContrato: 'Contrato Individual de Trabajo por Tiempo Indeterminado',
            descripcionContrato: 'Es aquel que por regla general formaliza la relación laboral (si no se tiene contrato firmado, se entiende que la relación de trabajo será de esta naturaleza).',

        },
        {
            flag: 'contratoc',
            nombreContrato: 'Contrato Individual de Trabajo por Tiempo Indeterminado con periodo a prueba',
            descripcionContrato: 'Es aquel que por regla general formaliza la relación laboral (si no se tiene contrato firmado, se entiende que la relación de trabajo será de esta naturaleza).',

        },
        {
            flag: 'contratod',
            nombreContrato: 'Contrato Individual por Tiempo Indeterminado con Período de Capacitación Inicial',
            descripcionContrato: 'Es aquel que por regla general formaliza la relación laboral (si no se tiene contrato firmado, se entiende que la relación de trabajo será de esta naturaleza).',
        },
        {
            flag: 'contratoe',
            nombreContrato: 'Otros contratos',
            descripcionContrato: '¿Buscas algún otro contrato? Contáctanos y te mostraremos nuestros recursos disponibles.',
        },
    ]

    const [displayContract, setDisplayContract] = useState({
        contratoDefaultDisplay: true,
        contrato1Display: false,
        contrato2Display: false,
        contrato3Display: false,
        contrato4Display: false,
        contrato5Display: false,
    })

    const handleDisplayContrato1 =()=>{
        setDisplayContract({
            contratoDefaultDisplay: false,
            contrato1Display: true,
            contrato2Display: false,
            contrato3Display: false,
            contrato4Display: false,
            contrato5Display: false,
        })
    }
    const handleDisplayContrato2 =()=>{
        setDisplayContract({
            contratoDefaultDisplay: false,
            contrato1Display: false,
            contrato2Display: true,
            contrato3Display: false,
            contrato4Display: false,
            contrato5Display: false,
        })
    }
    const handleDisplayContrato3 =()=>{
        setDisplayContract({
            contratoDefaultDisplay: false,
            contrato1Display: false,
            contrato2Display: false,
            contrato3Display: true,
            contrato4Display: false,
            contrato5Display: false,
        })
    }
    const handleDisplayContrato4 =()=>{
        setDisplayContract({
            contratoDefaultDisplay: false,
            contrato1Display: false,
            contrato2Display: false,
            contrato3Display: false,
            contrato4Display: true,
            contrato5Display: false,
        })
    }
    const handleDisplayContrato5 =()=>{
        setDisplayContract({
            contratoDefaultDisplay: false,
            contrato1Display: false,
            contrato2Display: false,
            contrato3Display: false,
            contrato4Display: false,
            contrato5Display: true,
        })
    }

    const [displayContractModal, setDisplayContractModal] = useState(false);

    const handleContractModal =()=>{
        setDisplayContractModal(!displayContractModal);
    }

  return (
    <>

    {   displayContractModal === true
    ?   <LandingContractComponent
            displayContractModal={displayContractModal} 
            setDisplayContractModal={setDisplayContractModal}
            handleContractModal={handleContractModal}
        />
    :   null
    }

    <section id='OurContracts'>
        <p class="text-center">
            <strong>El Contrato Individual de Trabajo es un acto jurídico indispensable y obligatorio, por medio del cual se hacen constar las condiciones generales de trabajo pactadas entre el trabajador y el patrón.</strong><br/>
        </p>
        <div id="contratos">
            <div class="contratos-wrapper">
                <ul class="contratos-list parent">
                    <li id="contrato1" class="contrato contrato1" onClick={handleDisplayContrato1}>{infoContratos[1].nombreContrato}</li>
                    <li id="contrato2" class="contrato contrato2" onClick={handleDisplayContrato2}>{infoContratos[2].nombreContrato}</li>
                    <li id="contrato3" class="contrato contrato3" onClick={handleDisplayContrato3}>{infoContratos[3].nombreContrato}</li>
                    <li id="contrato4" class="contrato contrato4" onClick={handleDisplayContrato4}>{infoContratos[4].nombreContrato}</li> 
                    <li id="contrato5" class="contrato contrato5" onClick={handleDisplayContrato5}>{infoContratos[5].nombreContrato}</li>
                </ul>
                <ul class="contratos-displayer parent2">
                    
                    <ContratoComponent 
                        flag={infoContratos[0].flag}
                        nombreContrato={infoContratos[0].nombreContrato}
                        descripcionContrato={infoContratos[0].descripcionContrato}
                        estilo={ displayContract.contratoDefaultDisplay ===true ?  'contratoContent' : 'default' }
                    /> 

                   <ContratoComponent 
                        flag={infoContratos[1].flag}
                        nombreContrato={infoContratos[1].nombreContrato}
                        descripcionContrato={infoContratos[1].descripcionContrato}
                        handleContractModal={handleContractModal}
                        estilo={ displayContract.contrato1Display ===true ?  'contratoContent' : 'default' }
                    /> 

                    <ContratoComponent 
                        flag={infoContratos[2].flag}
                        nombreContrato={infoContratos[2].nombreContrato}
                        descripcionContrato={infoContratos[2].descripcionContrato}
                        handleContractModal={handleContractModal}
                        estilo={ displayContract.contrato2Display ===true ?  'contratoContent' : 'default' }
                    />
                    <ContratoComponent 
                        flag={infoContratos[3].flag}
                        nombreContrato={infoContratos[3].nombreContrato}
                        descripcionContrato={infoContratos[3].descripcionContrato}
                        handleContractModal={handleContractModal}
                        estilo={ displayContract.contrato3Display ===true ?  'contratoContent' : 'default' }
                    />
                    <ContratoComponent 
                        flag={infoContratos[4].flag}
                        nombreContrato={infoContratos[4].nombreContrato}
                        descripcionContrato={infoContratos[4].descripcionContrato}
                        handleContractModal={handleContractModal}
                        estilo={ displayContract.contrato4Display ===true ?  'contratoContent' : 'default' }
                    />
                    <ContratoComponent 
                        flag={infoContratos[5].flag}
                        nombreContrato={infoContratos[5].nombreContrato}
                        descripcionContrato={infoContratos[5].descripcionContrato}
                        handleContractModal={handleContractModal}
                        estilo={ displayContract.contrato5Display ===true ?  'contratoContent' : 'default' }
                    /> 
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurContracts