 
const SimpleFrom = () => {
    const handlerSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log("from submitted.");
    }
    return (
        <div>
          <form onSubmit={handlerSubmit}>
            <input type="text" name="name" />
            <br />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="submit" value="Submit" />

          </form>
        </div>
    );
};

export default SimpleFrom;