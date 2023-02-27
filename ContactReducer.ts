
export type ContactState = {
    Contact: {
        name: string,
        number: number,
        email: string
    }
    contacts: Contact[]
}

export type Contact = {
    name: string,
    number: number,
    email: string
}

export type SetContactNameAction = { type: "SET_NAME", payload: string };
export type SetPhoneNumberAction = { type: "SET_NUMBER", payload: number };
export type SetEmailAction = { type: "SET_EMAIL", payload: string };
export type AddContactAction = { type: "ADD_CONTACT" };


export type ContactAction = SetContactNameAction | SetPhoneNumberAction | SetEmailAction | AddContactAction;

export function contactReducer(state: ContactState, action: ContactAction): ContactState {

    const nextState: ContactState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "SET_NAME": {
            nextState.Contact.name = action.payload;
            return nextState;
        }
        case "SET_NUMBER": {
            nextState.Contact.number = action.payload;
            return nextState;
        }
        case "SET_EMAIL": {
            nextState.Contact.email = action.payload;
            return nextState;
        }
        case "ADD_CONTACT": {
            const contact: Contact = {
                name: nextState.Contact.name,
                number: nextState.Contact.number,
                email: nextState.Contact.email
            };
            nextState.contacts.push(contact)
            nextState.contacts.sort((a, b) => { return a.name.localeCompare(b.name) });
            return nextState;
        }
    }




}

