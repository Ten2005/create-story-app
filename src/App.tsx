import React from 'react';
import './index.css'
import './App.css'
import Header from './components/Header'
import Description from './components/Description'
import Interpretation from './components/Interpretation'

const App: React.FC = () => {
  // desription or interpretation
  const [state, setState] = React.useState('description')
  const [nickname, setNickname] = React.useState('');
  const [isOriginal, setIsOriginal] = React.useState(false);

  return (
    <>
    <Header
    state={state}
    isOriginal={isOriginal}
    setIsOriginal={setIsOriginal}
    />
    {state === 'description'
    && <Description
    setState={setState}
    nickname={nickname}
    setNickname={setNickname}
    />
    }
    {state === 'interpretation'
    && <Interpretation
    setState={setState}
    nickname={nickname}
    isOriginal={isOriginal}

    />
    }
    </>
  )
}


export default App;