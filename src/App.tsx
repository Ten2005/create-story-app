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

  return (
    <>
    <Header />
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
    setNickname={setNickname}
    />
    }
    </>
  )
}


export default App;