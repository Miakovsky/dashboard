import Banner from './pic.png'
import "./home.css"; 

export default function HomePage(){
    return(
        <div id='main'>
            <h2>WELCOME</h2>
            <h3>to the brandnew dashboard of</h3>
            <h1>VOICES OF THE VOID</h1>
            <img src={Banner}></img>
        </div>
    )
}