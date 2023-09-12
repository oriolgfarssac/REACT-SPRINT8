import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Ships from '../components/ships';

function mainPage() {
  return (
    <>
    <header className='container-fluid'>
    <h1 className='col-12'>Star<br/>Wars</h1>
    </header>
    <Ships></Ships>
    </>
  )
}

export default mainPage;