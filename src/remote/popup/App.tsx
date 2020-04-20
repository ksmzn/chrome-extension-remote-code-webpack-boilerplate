import React, { useEffect } from 'react';

const popUpListener = async (
  request: any,
  _sender: chrome.runtime.MessageSender
) => {
  switch (request.msg) {
    case 'closePopup':
      window.close();
      break;
    default:
      break;
  }
};

const App = () => {
  useEffect(() => {
    chrome.runtime.onMessage.addListener(popUpListener);
    return () => chrome.runtime.onMessage.removeListener(popUpListener);
  }, []);

  return <div>This is a POPUP!</div>;
};

export default App;
