import * as ReferenceActions from './references';
import * as PostActions from './posts';
import * as TabActions from './tab';

export const ActionCreators = Object.assign({},
    PostActions,
    ReferenceActions,
    TabActions
);