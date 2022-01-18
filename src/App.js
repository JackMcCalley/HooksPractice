import './App.css';
import React from 'react'
import StatePractice from './components/StatePractice';
import ReducerPractice from './components/ReducerPractice';
import EffectTutorial from './components/EffectPractice';
import RefPractice from './components/RefPractice';
import LayoutEffectPractice from './components/LayoutPractice';
import ImperativeHandle from './components/ImperativeHandle';
import ContextPractice from './components/ContextPractice';
import MemoPractice from './components/MemoPractice';
import CallbackPractice from './components/CallbackPractice';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <StatePractice/>
      <br/>
      <h1>useReducer</h1>
      <ReducerPractice/>
      <br/>
      <h1>useEffect</h1>
      <EffectTutorial/>
      <br/>
      <h1>useRef</h1>
      <RefPractice/>
      <br/>
      <h1>useLayoutEffect</h1>
      <LayoutEffectPractice/>
      <br/>
      <h1>useImperativeHandle</h1>
      <ImperativeHandle/>
      <br/>
      <h1>useContext</h1>
      <ContextPractice/>
      <br/>
      <h1>useMemo</h1>
      <MemoPractice/>
      <br/><br/><br/><br/>
      <h1>useCallback</h1>
      <CallbackPractice/>
      <br/><br/><br/><br/>
      <h1>Custom Hook</h1>
      <Counter/>
      <br/><br/><br/><br/>
    </div>
  );
}

export default App;
