

/*
* types d'actions
*/
export const actions = {
    AJOUTER_AU_PANIER: "AJOUTER_AU_PANIER",
    MISE_A_JOUR_PANIER: "MISE_A_JOUR_PANIER",
    RETIRER_DU_PANIER: "RETIRER_DU_PANIER"
}

/*
*actions créées
*/
const uid = () => Math.random().toString(34).slice(2)
export function ajouteraupanier(item, quantity) {
    return {

        type: actions.AJOUTER_AU_PANIER,
        payload: { id: uid(), quantity: quantity, details: item }
    }
}

export function miseajourpanier(item, quantity) {
    return {
        type: actions.MISE_A_JOUR_PANIER,
        payload: { item: item, quantity }
    }
}

export function retirerdupanier(item) {
    return {
        type: actions.RETIRER_DU_PANIER,
        payload: item
    }
}