import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Recipe, SignIn,CreateAccount,Search , Home ,Details,Search2,Profile,Splash  } from "./src/Screens";
import Wasfatk from "./src/components/Wasfatk";
import login from "./src/components/login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./src/context";
//import Onboarding from './src/screens/Onboarding';
import Onboarding from './Onboarding';
import Searcha from "./src/components/Searcha";
import Searchb from "./src/components/Searchb";
import Searchc from "./src/components/Searchc";
import Channel from "./src/components/Channel";
import About from "./src/components/About";
import favourite from "./src/components/favourite";



const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const RecipeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const AppStack = createStackNavigator();
const TabkhatStack = createStackNavigator();
import {MaterialIcon} from './src/components/Icon';
import Icon from './src/components/icon';
import TabBar from './src/components/tabbar';
import { Ionicons } from '@expo/vector-icons';






const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? 
    (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) :(
      <RootStack.Screen
        name="Auth"
        component={appOnBording}
        options={{
          animationEnabled: false
        }}
      />
      
    )}
  </RootStack.Navigator>
);
const appOnBording = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
      {!showOnboard && <AuthStackScreen />}
    </>
  );
};
const DrawerScreen = () => (
  <Drawer.Navigator drawerPosition="right">
    <Drawer.Screen name="الصفحة الرئيسية" component={TabsScreen} />
    <Drawer.Screen name="الملف الشخصي" component={ProfileStackScreen} />
  </Drawer.Navigator>
);
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={login}
      options={{ title: "تسجيل الدخول" }}
    />
    
    <AuthStack.Screen 
    name="TabsScreen"
    component={TabsScreen}
    options={{
      headerShown: false,
    }}
  />
  <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "عمل حساب جديد" }}
    />
    
  </AuthStack.Navigator>
);


const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="اوريجانو" component={Home} />
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
     
  
   <HomeStack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
       <SearchStack.Screen name="Searcha" component={Searcha} options={{
            headerShown: false,
          }} />
<HomeStack.Screen
          name="Channel"
          component={Channel}
          options={{
            headerShown: false,
          }}
        />
  </HomeStack.Navigator>
);
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="بحث" component={Search} />
    <SearchStack.Screen name="Searcha" component={Searcha} options={{
            headerShown: false,
          }} />
           <SearchStack.Screen
          name="Searchb"
          component={Searchb}
          options={{
            headerShown: false,
          }}
        />
         <SearchStack.Screen
          name="Searchc"
          component={Searchc}
          options={{
            headerShown: false,
          }}
        />

  </SearchStack.Navigator>
);
const SearchStackScreen2 = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="الاعدادات" component={Search2} />
    <SearchStack.Screen
          name="Search2"
          component={Search2}
          options={{
            headerShown: false,
          }}
        />
        <SearchStack.Screen
          name="Wasfatk"
          component={Wasfatk}
          options={{
            headerShown: false,
          }}
        />
    

        <SearchStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
         <SearchStack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
         <SearchStack.Screen
          name="login"
          component={login}
          options={{
            headerShown: false,
          }}
        />
         <SearchStack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
          }}
        />
         <SearchStack.Screen
          name="favourite"
          component={favourite}
          options={{
            headerShown: false,
          }}
        />
  </SearchStack.Navigator>
);

const RecipeStackScreen = () => (
<RecipeStack.Navigator>
  <RecipeStack.Screen name="وصفاتك" component={Recipe} />
      <RecipeStack.Screen 
      name="Recipe"
          component={Recipe}
          options={{
            headerShown: false,
          }}
          />
</RecipeStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="صفحتي الشخصية" component={Profile} />
  </ProfileStack.Navigator>
); 
const myOptions = () => (
  <MaterialIcon size="large" color="purple" name="home" />

);
const TabsScreen = () => (
  
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName = "ios-home";

        if(route.name === 'الصفحة الرئيسية') {
        }
        else if (route.name === 'بحث') {
            iconName = 'ios-search';
        }   else if (route.name === 'وصفاتك') {
          iconName = 'ios-add';
      }
        else if (route.name === 'الاعدادات') {
            iconName = 'ios-settings';
        }
      

        return <Ionicons name={iconName} size={size} color={color} />;
    },
    

})}
  >
    
    <Tabs.Screen name="الصفحة الرئيسية" options={myOptions} component={HomeStackScreen}/>
    <Tabs.Screen name="بحث" component={SearchStackScreen} />
    <Tabs.Screen name="وصفاتك" component={RecipeStackScreen} />
    <Tabs.Screen name="الاعدادات" component={SearchStackScreen2} />
  </Tabs.Navigator>
);







const index = () =>{
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);



  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
 

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  </AuthContext.Provider>
   );
};
export default index;


