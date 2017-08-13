import { combineReducers } from 'redux';
import VideoReducer from './video_reducer';
import Activevideo from './activeVideo_reducer';


// this is passed as state in maptoPropsState function
const rootReducer = combineReducers({
 videos: VideoReducer,
 activeVideo: Activevideo
});

export default rootReducer;
