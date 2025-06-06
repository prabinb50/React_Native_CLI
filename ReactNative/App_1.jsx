import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FundamentalConcepts from './src/components/FundamentalConcepts'
import FlexStyling from './src/components/styling/FlexStyling'
import FlexDirection from './src/components/styling/FlexDirection'
import PercentageAndNumberStyling from './src/components/styling/PercentageAndNumberStyling'
import ThemeBasedStyling from './src/components/styling/ThemeBasedStyling'
import ScrollViewTopic from './src/components/scrolling/ScrollView'
import FlatListTopic from './src/components/scrolling/FlatList'
import HandlingUserInput from './src/components/HandlingUserInput'
import SwitchUI from './src/components/SwitchUI';
import SearchFunctionality from './src/components/SearchFunctionality';
import GridWithMap from './src/components/GridWithMap'

const App_1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>App</Text> */}

            {/* <FundamentalConcepts /> */}

            {/* Styling Topics */}
            {/* <ThemeBasedStyling></ThemeBasedStyling> */}
            {/* <PercentageAndNumberStyling></PercentageAndNumberStyling> */}
            {/* <FlexStyling></FlexStyling> */}
            {/* <FlexDirection></FlexDirection> */}
            {/* <FlexGrow></FlexGrow> */}

            {/* For scrolling*/}
            {/* <ScrollViewTopic></ScrollViewTopic> */}
            {/* FlatList is a better option rather than ScrollView */}
            {/* <FlatListTopic></FlatListTopic>  */}

            {/* <HandlingUserInput></HandlingUserInput> */}

            <GridWithMap></GridWithMap>

            {/* <SwitchUI></SwitchUI> */}

            {/* <SearchFunctionality></SearchFunctionality> */}

        </SafeAreaView >
    )
}

export default App_1

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure SafeAreaView takes up the full screen
    },
})

// npx react-native run-android



