import {StyleSheet} from 'react-native';


const colors = {
    background: '#121212',
    textPrimary: '#FFFFFF',
    border: '#dcdcdc',
};


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        maxWidth: 500,
        maxHeight: 1000,
        margin: 'auto',
        height: "100%",
        width: '100%',
    },
    searchBarContainer: {
        backgroundColor: colors.background,
        marginTop: 48,
    },
    searchBarContainerInner:{
        backgroundColor: colors.background,
        position: "relative",
    },
    searchIcon: {
        position: "absolute",
        right: 20,
        top: 22,
        color: colors.textPrimary,
    },
    searchBar: {
        borderWidth: 1,
        height:58,
        color: colors.textPrimary,
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    tabContentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    navigationBottom: {
        flex: 1,
        backgroundColor: colors.background,
        zIndex: 100,
    },
    secondaryTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
    },
    black: {
        color: colors.background,
    },
    white: {
        color: colors.textPrimary,
    },
    title: {
        fontFamily: 'Roboto-Bold',
        color: colors.textPrimary,
        fontSize: 56,
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    bold: {
        fontFamily: 'Roboto-Bold',
    },
    tabContent: {
        position: "absolute",
        zIndex: 10,
        left: 30,
        top: 30,
    },
    forecastDay: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    forecastDayWrapper: {
        backgroundColor: colors.background,
        padding: 20,
        borderColor: colors.border,
        borderBottomWidth: 1,
    },

    forecastDayWrapperFirst: {
        borderColor: colors.border,
        borderTopWidth: 1,
    },
    forecastDayAdditional: {
        paddingTop: 20,
        paddingBottom: 10,
    },
    image: {
        width: 50,
        aspectRatio: 1
    },
    imageIcon: {
        width: 90,
        height: 90,
    },
    todayAbsoluteContainer: {
        position: 'absolute',
        zIndex: 1,
        right: 30,
        top: 30,
        textAlign:'center'
    },
    todayWeatherType: {
        textAlign:'center',
        marginTop: 8,
        color: colors.textPrimary,
        fontFamily: 'Roboto-Bold',
        fontSize:18,

    },
    noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResultsTextContainer: {
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: [{translateX: -50}, {translateY: -50}],
    },
    forecastDayAdditionalSecondRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
    }


});

export default styles;