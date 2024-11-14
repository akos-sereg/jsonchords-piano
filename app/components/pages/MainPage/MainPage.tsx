import * as React from 'react';
import Piano from '../../widgets/Piano/Piano';

const MainPage = () => {

    return (
       <div>
           <Piano displayNotes={['O5-G', 'O2-C', "O4-A#"]} />
       </div>
   );

};

export default MainPage;
