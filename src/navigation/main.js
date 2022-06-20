import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ServiceDetailsScreen, ServicesScreen } from "../screens/index";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Services" component={ServicesScreen} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;