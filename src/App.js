
import './App.css';
import { Flex,View } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { 
 /* import { useState } from 'react';
 Restlist
 Rocket,
 ItemCardCollection,
  const [  selected, setSelected ] = useState();

  console.log(selected)
 {selected ? <StandardCard   KFOOD={selected} />: <Rocket />}
 console.log(selected)
 const Default_PADDING ={
      bottom:400,
 };
 const Default_Zoom =13;
 {selected ? <Details   kfood={selected} />: <Profile />}  
  Profile
  <ItemCardCollection  overrideItems={({item})=>({
     onClick:()=> setSelected(item)
})}/>
 */
SernamesCollection,
 Detail

} from './ui-components';

 

function App() {
 
  const [  selected, setSelected ] = useState();
  console.log(selected)
  
  return (
    <div className="App">

      <Flex overflow="auto">
     
<View >

<SernamesCollection  overrideItems={({item})=>({
     onClick:()=> setSelected(item)
})}/>
</View>
<Flex position="relative" overflow="hidden" glow={1} direction="column"/>
{selected ? <Detail   kFOOD={selected} />: <Detail />}
        </Flex>

     
    </div>
  );
}

export default (App);
