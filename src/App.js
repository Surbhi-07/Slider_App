import React from 'react';
import './App.css';
import Slides from './components/Slides';

function App() {

    return (
        <div className='container shadow p-3 mb-5 bg-white rounded mt-3'>
            <div className='container mb-2 mt-3' style={{ backgroundColor: 'darkgray' }}>
                <h2 className='text-center'>Slideshow App</h2>
            </div>
            <div className="App">
                <Slides />
            </div>
        </div>
    );
}

export default App;