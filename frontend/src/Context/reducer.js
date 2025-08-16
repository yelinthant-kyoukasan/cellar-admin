function Reducer(state, action) {
    switch (action.type) {
        case 'DARK_MODE':
            return {
                ...state,
                darkMode: true,
            }
        break;
        case 'LIGHT_MODE':
            return {
                ...state,
                darkMode: false,
            }
        break;
        case 'UPLOAD':
            return {
                ...state,
                outof_stock: action.outof_stock,
                rating: action.rating,
                storeValue: action.storeValue,
                numItems: action.numItems,
            }
        break;
        case 'SET_ITEMS':
            return {
                ...state,
                invenItems: action.payload,
            }
        break;
        case 'ADD_ITEM':
            return {
                ...state,
                invenItems: [...state.invenItems, action.product],
            }
        break;
        case 'SET_USER':
            //console.log(action.user);
            return {
                ...state,
                user: action.user,
            }
        break;
        case 'LOG_OUT':
            // console.log(action.user);
            return {
                ...state,
                user: null,
            }
        break;
        case 'DELETE_ITEM':
            let currentItems = [...state.invenItems]
            let removeId = action.id;
            let removeItem = currentItems.findIndex(item => {
                return item._id === removeId;
            })
            if( removeItem >= 0){
                currentItems.splice(removeItem, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket`);
            }
            let newBasket = currentItems;

            return {
                ...state,
                invenItems: newBasket
            }
        break;
        case 'CHANGE_ITEM':
            let currentProducts = [...state.invenItems]
            let changeId = action.id;
            let changeItem = currentProducts.findIndex(item => {
                return item._id === changeId;
            })
            if( changeItem >= 0){
                currentProducts.splice(changeItem, 1, action.product);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket`);
            }
            let newProducts = currentProducts;

            return {
                ...state,
                invenItems: newProducts
            }
        break;
        default:
            return state;
        break;

    }
}

export default Reducer