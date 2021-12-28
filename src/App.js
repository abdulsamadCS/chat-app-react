import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height='100vh'
            userName='abdulsamad'
            userSecret='12345678'
            projectID='bb8db61a-b64b-428f-886b-3fdc21cbbef5'
            renderChatFeed = { (chatAppProps ) => <ChatFeed {... chatAppProps}/>}
        />
    )

}

export default App;  