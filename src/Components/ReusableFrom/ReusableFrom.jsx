 
const ReusableFrom = ({fromTitle,handlerSubmit, submitBtnText='Submit',children}) => {
  const handlerLocalSubmit = e =>{
    e.preventDefault();
    const data ={
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value
    }
    handlerSubmit(data);
  }
    return (
        <div>
            {children}
            {/* <h2>{fromTitle}</h2> */}
        <form onSubmit={handlerLocalSubmit}>
          <br />
      <input type="text" name="name" />
      <br />
      <br />
      <input type="email" name="email" id="" />
      <br />
      <br />
      <input type="password" name="password" id="" />
      <br />
      <br />
      <input className="bg-blue-400 p-2 rounded-lg" type="submit" value= {submitBtnText} />

    </form>
  </div>
    );
};

export default ReusableFrom;