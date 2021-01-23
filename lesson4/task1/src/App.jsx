import React from 'react';
import Counter from './Counter';



const App = () => {
    return (
        <>
        <Counter start={17} interval={1000} />
        <Counter start={-40} interval={500} />
        <Counter start={69} interval={2000} />
        </>
    );
}
export default App;