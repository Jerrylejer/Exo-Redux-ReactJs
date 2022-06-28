import { LOAD_API, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";

// Notre state => 3 actions, on attends donc 3 états
const commentsInitialState = {
    // LOAD_API
    isLoading: false,
    // LOAD_COMMENTS_SUCCESS
    comments: [],
    // LOAD_COMMENTS_ERROR
    error: ''
};

const reducerComments = (state = commentsInitialState, action) => {
    switch(action.type) {
        case LOAD_API:
            return {
                ...state,
                isLoading: true
                // Affichage => "En attentde connexion"
            }

        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                //API connectée donc isLoading est terminé
                isLoading: false,
                // On récupère les comments via un payload
                comments: action.payload,
                // On ne récupère rien en erreur
                error: ''
            }

        case LOAD_COMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                // On ne récupère rien en comments
                comments: [],
                // On récupère les erreurs via un payload
                error: action.payload
            }

        default: return state;
    };
}

export default reducerComments;

