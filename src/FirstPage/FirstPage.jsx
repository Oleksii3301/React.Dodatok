import Registration from "../Registration/Registration";
import Meny from "./Meny";
import {Component} from "react";
import Chat from "./RightPage/Chat";
import EnterZvit from "./RightPage/EnterZvit";
import {BrowserRouter,Route} from "react-router-dom";


const FirstPage=(props) =>{



    return (
        <BrowserRouter>

            <div>

                <Meny/>
                <div>
                    <Route path='/chat' component={Chat} />
                    <Route path='/podatZvit' component={EnterZvit} numbers='32'/>

                </div>
            </div>


        </BrowserRouter>


    );
}

export default FirstPage;