const Welcome=(props)=> {
    const {name}=props;
    return (
      <>
        <h1>Hey ! {name}</h1>
        <h2>Greeting to Newton School.</h2>
      </>
    );
  }
  const Greeting=()=>{
    return(
        <>
        <Welcome name="john" />
        </>
    )
  }
  export default Greeting;