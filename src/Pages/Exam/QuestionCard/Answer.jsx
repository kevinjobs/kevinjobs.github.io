export default function Answer(props) {
  return(
    <div className="answers">
      <ul>
      {
        props.answers.map((a, index) => {
          return(
            <li key={index}>
              <span>{String.fromCharCode(index+65)}. </span>
              <span>{a}</span>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}