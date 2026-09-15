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
import Horloge from './components/exo6/horloge';
import DateOfDay from './components/exo7/DateOfDay';
import SwitchDateToHorloge from './components/exo8/switchDateHorloge';
import DemoAjax from './components/demo-Ajax/Ajax';
import DemoAjax2 from './components/demo-Ajax/Ajax2';
import ConsomationApi from './components/exo9/consomationApi';


function App() {

  function fQuiSeraDeclencheParUnComposantEnfant(data: number) {
    console.log('Données recues depuis component1', data)
  }

  function fQuiSeraDeclencheeParLaModal(response: boolean) {
    console.log(response)
    if (response) {
      // faire qque chose
    }
    else {
      // faire autre chose
    }
    setOpen(false)
  }

  const [open, setOpen] = useState(false)

  const [Visibility, setVisibility] = useState<string>("None")



  return <>
    <Composant1 nom='Khun' nom2='Mike' onSend={fQuiSeraDeclencheParUnComposantEnfant} />
    <hr />
    <Composant1 nom='Alice' nom2='Caroline' onSend={fQuiSeraDeclencheParUnComposantEnfant} />
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
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "TodoContainer" ? "None" : "TodoContainer")}>Afficher Todo</button>
    {Visibility == "TodoContainer" ? (
      <TodoContainer />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "ContainerTestEffect" ? "None" : "ContainerTestEffect")}>Afficher Test Effect</button>
    {Visibility == "ContainerTestEffect" ? (
      <ContainerTestEffect />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "Horloge" ? "None" : "Horloge")}>Afficher Horloge</button>
    {Visibility == "Horloge" ? (
      <Horloge />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "DateOfDay" ? "None" : "DateOfDay")}>Afficher Date du jour</button>
    {Visibility == "DateOfDay" ? (
      <DateOfDay />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "SwitchDateToHorloge" ? "None" : "SwitchDateToHorloge")}>Afficher Switch Date/Horloge</button>
    {Visibility == "SwitchDateToHorloge" ? (
      <SwitchDateToHorloge />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "DemoAjax" ? "None" : "DemoAjax")}>Afficher Photo de chien</button>
    {Visibility == "DemoAjax" ? (
      <DemoAjax />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "DemoAjax2" ? "None" : "DemoAjax2")}>Afficher Futurama</button>
    {Visibility == "DemoAjax2" ? (
      <DemoAjax2 />
    ) : null}
    <hr />


    <button className='btn btn-outline-dark' onClick={() => setVisibility(Visibility == "PokeApi" ? "None" : "PokeApi")}>Afficher Pokeapi (tyradex)</button>
    {Visibility == "PokeApi" ? (
      <ConsomationApi />
    ) : null}

  </>
}

export default App
