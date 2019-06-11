import React from 'react';
import {ImagePicker} from 'react-file-picker';
import './App.css';

function App() {
  const [state, dispatcher] = React.useState(0);
  const [target_image, fileDispatcher] = React.useState(null);

  const image_style = {
    background: `url(${target_image}) center/cover no-repeat`,
  };

  const hoge = (fuga) => {
    console.log(fuga);
    fileDispatcher(fuga);
  }
  return (
    <div className="App">
      <div className={`image-container ${state === 0 ? 'triangle' : (state === 1 ? '' : 'circle')}`} style={target_image !== null ? image_style : {}} />
      <div className="controller">
        <button className="button" onClick={() => dispatcher(state + 1 <= 2 ? state + 1 : state)}>転がる</button>
        <button className="button" onClick={() => dispatcher(state - 1 >= 0 ? state - 1 : state)}>転がらない</button>
      </div>
      <ImagePicker
        extensions={['jpg', 'jpeg', 'png']}
        dims={{minWidth: 1, maxWidth: Infinity, minHeight: 1, maxHeight: Infinity}}
        onChange={base64 => hoge(base64)}
        onError={errMsg => console.log(errMsg)}
      >
      <button className="uploader button">
        Click to upload image
      </button>
      </ImagePicker>
    </div>
  );
}

export default App;
