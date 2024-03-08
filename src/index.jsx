import {StatusBar} from 'react-native';
import Navigator from './navigator';

function Index() {
  return (
    <>
      <Navigator />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
      />
    </>
  );
}

export default Index;
