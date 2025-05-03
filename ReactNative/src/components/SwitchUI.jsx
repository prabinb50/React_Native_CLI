import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const SwitchUI = () => {
    // state to manage the switch state
    const [isEnabled, setIsEnabled] = useState(false);

    // function to toggle the switch state
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Text>SwitchUI</Text>

            <Switch
                // Track color of the switch when it is on/off
                trackColor={{ false: "#76757", true: "#81b0ff" }}

                // Thumb color of the switch when it is on/off
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}

                onValueChange={toggleSwitch} // Function to call when the switch is toggled

                // Value of the switch
                value={isEnabled} 

                // Style of the switch
                style={{
                    marginTop: 20,
                    marginBottom: 20,
                    alignSelf: 'center',
                    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Scale the switch size
                }}
            >
            </Switch>
        </View>
    )
}

export default SwitchUI

const styles = StyleSheet.create({})