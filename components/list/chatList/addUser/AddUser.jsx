import "./addUser.css"

const AddUser = () => {

    return (
        <div className="addUser">

            <form>

                <input type="text" placeholder="Username" />
                <button>Search</button>

            </form>
            <div className="user">

                <div className="detail">
                    <img src="./avatar.png"></img>
                    <span>Mr abc</span>

                </div>
                <button>Add User</button>
            </div>



        </div>

    )


}

export default AddUser