 
import './App.css'
// import HookFromInput from './Components/HookFromInput/HookFromInput'
import ReusableFrom from './Components/ReusableFrom/ReusableFrom'
// import RefFrom from './Components/RefFrom/RefFrom'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
// import StateFrom from './Components/StateFrom/StateFrom'

function App() {
  
  const handlerSingUpSubmit = data =>{
     console.log('sing up data',data);
}
const handlerUpdateProfile = data =>{
    console.log('profile data',data);
}

  return (
    <>
       
      <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFrom></StateFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFromInput></HookFromInput> */}
      <ReusableFrom fromTitle={'Sing Up'} handlerSubmit={handlerSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now.</p>
        </div>
      </ReusableFrom>
      <ReusableFrom fromTitle={'Profile Update'} submitBtnText={'Update'} handlerSubmit={handlerUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update.</p>
        </div>
      </ReusableFrom>
      
    </>
  )
}

export default App
