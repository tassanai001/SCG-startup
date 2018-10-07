import { createStackNavigator } from 'react-navigation';
import Exam1 from './screens/Exam1Screen';
import Exam2 from './screens/Exam2Screen';
import Exam3 from './screens/Exam3Screen';

const AppStackNavigator = createStackNavigator(
  {
    Exam1Screen: {
      screen: Exam1,
      headerBackTitleVisible: true,
      navigationOptions: () => ({
        title: `Example 1`,
        headerBackTitle: null,
        headerTruncatedBackTitle: `to A`
      }),
    },
    Exam2Screen: {
      screen: Exam2,
      navigationOptions: () => ({
        title: `Exam 2`,
      }),
    },
    Exam3Screen: {
      screen: Exam3,
      navigationOptions: () => ({
        title: `Exam 3`,
      }),
    }
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'left'
  }
);

export default AppStackNavigator;