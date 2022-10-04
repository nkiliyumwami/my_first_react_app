import './App.css';

//create a component
const Person = ({firstName, lastName, age}) => {
  return (
    <>
    <h1>FirstName: {firstName}</h1>
    <h1>LastName: {lastName}</h1>
    <h1>Age: {age}</h1>
    </>
  )
}

const App = () => {
  return(
    <div className="App">
      <Person firstName={'Mary'} lastName={'Doe'} age={35} />
      <Person firstName={'Peter'} lastName={'Pan'} age={15}  />
      <Person firstName={'Clarisse'} lastName={'Ingabire'} age={34}  />
      <Person firstName={'Chantal'} lastName={'Uwineza'} age={89} />
      
    </div>
  )
}

export default App;
