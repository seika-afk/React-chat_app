import "./detail.css"


const Detail = () => {

    return (


        <div class='detail'>

            <div className="user">

                <img src="./avatar.png" />
                <h2>
                    Mr Reaper
                </h2>
                <p>A boy once lived in a house he never knew about.</p>
            </div>


            <div className="info">


                <div className="option">

                    <div className="title">



                        <span> Chat Settings</span>
                        <img src="./arrowUp.png" />
                    </div>


                </div>


                <div className="option">

                    <div className="title">



                        <span> Privacy & Help</span>
                        <img src="./arrowUp.png" />
                    </div>
                </div><div className="option">

                    <div className="title">



                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" />
                    </div>




                    <div class="photos">




                        <div class="photoitem">


                            <div class="photoDetail">


                                <img src="./bg.jpg" />
                                <span>photo_2022</span>


                            </div>

                            <img src="download.png" className="icon"></img>
                        </div>



                        <div class="photoitem">


                            <div class="photoDetail">


                                <img src="./bg.jpg" />
                                <span>photo_2022</span>


                            </div>

                            <img src="download.png" className="icon"></img>
                        </div>



                        <div class="photoitem">


                            <div class="photoDetail">


                                <img src="./bg.jpg" />
                                <span>photo_2022</span>


                            </div>

                            <img src="download.png" className="icon"></img>
                        </div> <div class="photoitem">


                            <div class="photoDetail">


                                <img src="./bg.jpg" />
                                <span>photo_2022</span>


                            </div>

                            <img src="download.png" className="icon"></img>
                        </div> <div class="photoitem">


                            <div class="photoDetail">


                                <img src="./bg.jpg" />
                                <span>photo_2022</span>


                            </div>

                            <img src="download.png" className="icon"></img>
                        </div> <div class="photoitem">


                            <div class="photoDetail">


                                <img src="./bg.jpg" />
                                <span>photo_2022</span>


                            </div>

                            <img src="download.png" className="icon"></img>
                        </div>

                    </div>







                </div><div className="option">

                    <div className="title">



                        <span> Shared Files</span>
                        <img src="./arrowUp.png" />



                    </div>
                </div>



                <button className="block">Block</button>

                <button className="block log">Log Out</button>




            </div>

        </div>

    )


}

export default Detail