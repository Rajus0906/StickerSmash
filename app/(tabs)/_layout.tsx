import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d', //colour of tab bar selections (yellow)
      headerStyle: {
        backgroundColor: '#25292e', //background colour of the top bar (black)
      },
      headerShadowVisible: false, // The shadow of the header is turned off
      headerTintColor: '#fff', //text colour of the header (whte)
      tabBarStyle: {
        backgroundColor: '#25292e', // background colour of the bottom tab menu (black)
      },
    }}
  >
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
      }}
    />
    <Tabs.Screen
    name="about"
    options= {{
      title: 'About',
      tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
      ),
    }}
  />

    </Tabs>
  );
}