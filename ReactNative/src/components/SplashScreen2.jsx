import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const SplashScreen2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>BINHERO</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66CA98', // Same green as the logo container
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        width: 135,
        height: 133,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 16,
    }
});

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// export const SplashScreen2 = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.content}>
//                 <Image
//                     source={require('../assets/logo.png')}
//                     style={styles.logo}
//                 />

//                 <Text style={styles.title}>BINHERO</Text>
//             </View>
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#66CA98',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     content: {
//         alignItems: 'center',

//     },
//     logo: {
//         width: 135,
//         height: 133,
//         resizeMode: 'contain',

//     },
//     title: {
//         fontSize: 32,
//         fontWeight: 'bold',
//         color: 'white',
//     }
// });