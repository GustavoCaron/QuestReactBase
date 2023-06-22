import './App.css';
import Text from './components/textCard/Text'
import LabelButton from './components/showLabel/LabelButton';

function App() {
  return (
      <>
        <Text title = 'Parágrafo Renderizado'/>        
        <LabelButton label='DevQuest é sensacional!' />
      </>
  );
}

export default App;
