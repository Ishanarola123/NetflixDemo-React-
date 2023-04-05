
import './App.css';
import Amazon from './components/Amazon';
import Card from './components/Card';
import Netflix from './components/Netflix';
import Sdata from './components/Sdata';
import UserChoise, { UserchoiseSeries } from './components/UserChoise';


function App() {
  return (
    <>
      <h1 className='heading'>List of Netflix Top Shows</h1>
      <div className='maincontiner'>
        {Sdata.map((value) => {
          return (
            <Card
              key={value.id}
              imgsrc={value.image}
              link={value.url}
              title={value.title}
              sname={value.sname}
            />
          )
        })}
      </div>

      <div className='maincontainer'>
        <h1 className='heading'> If else condition in React Js</h1>
        <UserChoise />
      </div>

      <div className='maincontainer'>
        <h1 className='heading'> Turnary operator in react js</h1>
        {UserchoiseSeries === "amzon" ? <Amazon/> : <Netflix/> }
         
      </div>


    </>
  );
}

export default App;
