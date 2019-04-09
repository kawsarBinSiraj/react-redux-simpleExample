

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

 // Data Store
 const store = createStore(rootReducer);

// export store
export default store;