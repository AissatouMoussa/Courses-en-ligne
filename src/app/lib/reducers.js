import { actions } from "./actions"

const initialState = {
    item: []
}

export default function onelineStoreApp(state = initialState, action) {
    switch (action.type) {
        case actions.AJOUTER_AU_PANIER: return Object.assign({}, state, { items: [...state.items, action.payload] });
        case actions.MISE_A_JOUR_PANIER: return Object.assign({}, state, {
            items: state.items.map(item => {
                return item.id === action.payload.item.id ?
                    Object.assign({}, item, {
                        quantity: action.payload.quantity
                    }) : item;
            })
        })
        case actions.RETIRER_DU_PANIER: return Object.assign({}, state, {
            items: state.items.filter(item => {
                return item.id != action.payload.id
            })
        })
    }
}