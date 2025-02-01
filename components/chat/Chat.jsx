import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useEffect, useRef, useState } from "react"
const Chat = () => {


    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")

    const endRef = useRef(null)
    useEffect(() => {



        endRef.current?.scrollIntoView({ behavior: "smooth" })

    }, [])





    const handleEmoji = e => {

        setText(prev => prev + e.emoji)
        setOpen(false)

    }

    return (


        <div class='chat'>



            <div className="top">


                <div className="user">
                    <img src="./avatar.png"></img>
                    <div className="texts">
                        <span>Crush1</span>
                        <p>
                            darkness is darkness .
                        </p></div>
                </div>

                <div className="icons">
                    <img src="./phone.png" />
                    <img src="./video.png" />
                    <img src="./info.png" />
                </div>


            </div>

            <div className="center">


                <div className="message">
                    <img src="./avatar.png"></img>

                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message own">

                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message">
                    <img src="./avatar.png"></img>

                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message">
                    <img src="./avatar.png"></img>

                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message own">


                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div> <div className="message">
                    <img src="./avatar.png"></img>

                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message own">


                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div> <div className="message">
                    <img src="./avatar.png"></img>

                    <div className="texts">

                        <img src="./bg.jpg" />
                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message own">


                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div> <div className="message">
                    <img src="./avatar.png"></img>

                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message own">


                    <div className="texts">


                        <p>oh hello how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
















                <div ref={endRef}></div>




            </div>





            <div className="bottom">


                <div className="icons">

                    <img src="/img.png" />

                    <img src="/camera.png" />

                    <img src="/mic.png" />

                </div>
                <input type="text" placeholder="Type a message ..." onChange={e => setText(e.target.value)} value={text} />
                <div className="emoji">
                    <img src="./emoji.png" onClick={() => setOpen(prev => !prev)} />
                    <div className="picker">


                        <EmojiPicker open={open} on onEmojiClick={handleEmoji} />


                    </div>
                </div>
                <button className="send">Send</button>


            </div>

        </div>

    )


}

export default Chat