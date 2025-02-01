import AddUser from "./addUser/AddUser"
import "./chatlist.css"
import { useState } from "react"




const Chatlist = () => {
    const [addmode, setmode] = useState(false)
    return (

        <div class="chatlist">



            <div class="search">

                <div class="searchbar">

                    <img src="./search.png" />
                    <input type="text" placeholder="Search" />


                </div>
                <img src={addmode ? "./minus.png" : "./plus.png"}
                    class="add"
                    onClick={() => setmode((prev) => !prev)}
                />
            </div>
            <div className="item">
                <img src="/avatar.png" />

                <div className="texts">

                    <span>Crush</span>
                    <p>I Lov3 u</p>
                </div>

            </div><div className="item">
                <img src="/avatar.png" />

                <div className="texts">

                    <span>Crush</span>
                    <p>I Lov3 u</p>
                </div>

            </div><div className="item">
                <img src="/avatar.png" />

                <div className="texts">

                    <span>Crush</span>
                    <p>I Lov3 u</p>
                </div>

            </div><div className="item">
                <img src="/avatar.png" />

                <div className="texts">

                    <span>Crush</span>
                    <p>I Lov3 u</p>
                </div>

            </div><div className="item">
                <img src="/avatar.png" />

                <div className="texts">

                    <span>Crush</span>
                    <p>I Lov3 u</p>
                </div>

            </div><div className="item">
                <img src="/avatar.png" />

                <div className="texts">

                    <span>Crush</span>
                    <p>I Lov3 u</p>
                </div>

            </div>




            {addmode && <AddUser />}
        </div>

    )



}



export default Chatlist