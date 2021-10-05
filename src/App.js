import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <ChatEngine
      height="100vh"
      projectID="d1d7ed0a-995d-4454-a8a7-319e68edc47f"
      userName="Dhruba"
      userSecret="dhruba123@"
      renderChatFeed = {(chatAppProps) => <ChatFeed{...chatAppProps} />}
      onNewMessage = { () => new Audio ('https://chat-engine-assets.s3,amazonaws.com/click.mp3').play()}

      />
      
    </div>
  );
}

export default App;
