import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const ChatFeed = (props) => {


    const { chats, activeChat, userName, message } = props;
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key,index)=>{
            const message = message[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className = "message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastmessageKey]}/>
                        }
                    </div>
                    <div className="read-recipts" style={{ marginRight: isMyMessage ? '0px' : '68px'}}></div>
                    .read
                   
                </div>
            );


        });
    };
    return (
        <div className='chat-fed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">

                </div>
                {renderMessages()}
                <div style = {{ height: '100px'}}/>
                <div className="messahe-form-container">
                    <MessageForm {...props} chatID={activeChat}/>
                    
                </div>
            </div>
           
        </div>
    )
    

}
export default ChatFeed;