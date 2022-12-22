import "../../chat.css";

const UserChat = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <label className="chat-btn" htmlFor="check">
                <i className="bi bi-chat-dots comment"></i>
                    <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                <i className="bi bi-x-circle close"></i>
            </label>
            <div className="chat-wrapper">
                <div className="chat-header">
                    <h6>Let's Chat - Online</h6>
                </div>
                <div className="chat-form">
                    <div className="cht-msg">
                        {Array.from({ length: 20 }).map((_, id) => {
                            console.log(id);
                        })}
                        <p>Chat History</p>
                    </div>
                <textarea 
                id="clientChatMsg"
                className="form-control"
                placeholder="Your chat message ..."
                ></textarea>

                <button className="btn btn-success btn-block">Submit</button>
                </div>
            </div>
        </>
    )
}

export default UserChat