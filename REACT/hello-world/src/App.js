import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComonent from './components/ParentComonent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './Styles/appStyles.css'
import Styles from './Styles/appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
    <LifecycleA />
    {/*<Form />*/}
    {/*<h1 className='error'>Error</h1>*/}
    {/*<h1 className={Styles.success}>Success</h1>*/}
    {/*<Inline />*/}
    {/*<Stylesheet primary={true} />*/}
    {/*<NameList/>*/}
    {/*<UserGreeting/>*/}
    {/*} <ParentComonent />*/}
    {/*<EventBind />*/}
    {/*<FunctionClick/>
    <ClassClick/>
     } <Counter />*/}
      {/*<Message/>*/}
      {/*<Greet name="bruce" heroName = "Batman">
        <p>This is children props</p>
        </Greet>
     <Greet name="john" heroName = "Superman">
        <button>Action</button>
      </Greet>
      <Greet name="goku" heroName = "saiyen" />
      <Welcome name="bruce" heroName = "Batman"/>
      <Welcome name="john" heroName = "Superman"/>
      <Welcome name="goku" heroName = "saiyen"/>
      <Hello/>*/}
    </div>
  );
}

export default App;
