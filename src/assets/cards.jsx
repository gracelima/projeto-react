function Cards(props) {
    return(
      <div>
        <h2>{props.titulo}</h2>
        <p>{props.paragrafo}</p>
        <img class="gif"src={props.gif} />
      </div>
    )
  }
  
  export default Cards
  