// import useInputState from "../../HookInput/useInputeState";

import useInputState from "../../HookInput/useInputeState";

const HookFromInput = () => {
    // const[name,handleNameChange]=useInputState('liton uddin')
    // const handlerSubmit = e =>{
    //     console.log('form name',name);
    //     e.preventDefault();
    // }
    const emailState = useInputState('mdniloyhasan544@gmail.com');
    const handlerSubmit = e =>{
        console.log('form name',emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
            {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
            <input  type="text" name="name" />
            <br />
            <br />
            <input {...emailState} type="email" name="email" id="" />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFromInput;