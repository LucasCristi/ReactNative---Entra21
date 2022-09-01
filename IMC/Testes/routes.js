import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./home";
import IMC from "./imc";



const Tab = createBottomTabNavigator();

function Routes(){
    return (
        <Tab.Navigator>

        <Tab.Screen
        name="Home"
        component={Home}
        />
        <Tab.Screen
        name="IMC"
        component={IMC}
        />

        </Tab.Navigator>
    )
}

export default Routes;