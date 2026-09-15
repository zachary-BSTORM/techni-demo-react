// import styles from './App.module.css'
import { useState } from 'react'
import Composant1 from './components/composant1/Composant1'
import Composant2 from './components/composant2/Composant2'
import Composant3 from './components/composant3/Composant3'
import ConfirmBox from './components/confirm-box/ConfirmBox'
import Exo1 from './components/exo1/Exo1'
import Exo2 from './components/exo2/Exo2'
import Exo4 from './components/exo4/exo4'
import TodoContainer from './components/exo5/todo-list';
import ContainerTestEffect from './components/demo-useEffect/demo-useEffect';


function App() {

  function fQuiSeraDeclencheParUnComposantEnfant(data: number) {
    console.log('Données recues depuis component1', data)
  }

  function fQuiSeraDeclencheeParLaModal(response: boolean) {
    console.log(response)
    if(response) {
      // faire qque chose
    }
    else {
      // faire autre chose
    }
    setOpen(false)
  }

  const [open, setOpen] = useState(false)

  return <>
    <Composant1 nom='Khun' nom2='Mike' onSend={fQuiSeraDeclencheParUnComposantEnfant} />
    <hr />
    <Composant1 nom='Alice' nom2='Caroline' onSend={fQuiSeraDeclencheParUnComposantEnfant}/>
    <hr />
    <Exo1 />
    <hr />
    <Composant2 />
    <hr />
    <Exo2 />
    <hr />
    <Composant3 />
    <hr />
    <Exo4 />
    <button className='btn btn-danger'
            onClick={() => setOpen(true)}><i className='bi bi-trash'></i></button>
    <ConfirmBox onResult={fQuiSeraDeclencheeParLaModal} show={open} title="Etes vous stupide ?" />
    <TodoContainer/>
    <hr />
    <ContainerTestEffect/>
  </>  
}

export default App
