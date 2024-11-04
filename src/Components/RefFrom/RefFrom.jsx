import { useEffect, useRef } from "react";

 

const RefFrom = () => {
    const nameRef =useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handlerSubmit =e =>{
        e.preventDefault();
        console.log(nameRef.current.value,emailRef.current.value,passwordRef.current.value)
        
    }
    return (
        <div>
              <form onSubmit={handlerSubmit}>
                <br />
            <input ref={nameRef} type="text" name="name" />
            <br />
            <br />
            <input ref={emailRef} type="email" name="email" id="" />
            <br />
            <br />
            <input ref={passwordRef} type="password" name="password" id="" />
            <br />
            <br />
            <input type="submit" value="Submit" />

          </form>
        </div>
    );
};

export default RefFrom;