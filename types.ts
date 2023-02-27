import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ListViewBase } from "react-native"

// The purpose of this file is to set up and declare what our screens are going to be and what their props are:

// define the props for each screen:
export type RootStackParamList = {


    // Home Screen that will list contacts
    Home: undefined,

    // Contains all the buttons for sending a message and email for each contact
    ContactLinking: undefined

    // The actual screen for each individual contact
    // The contact screen will take in a name which is a string
    Contact: { contactName: string }
}

export type Props = {
    home: NativeStackScreenProps<RootStackParamList, 'Home'>

    // one sub-type for contact page with name
    contact: NativeStackScreenProps<RootStackParamList, 'Contact'>
}

