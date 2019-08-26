import AlbumlistrReducer from '../../reducers/AlbumListReducer';

test('should set default values',()=>{
const state=AlbumlistrReducer("*a",{type:"RANDOM_ALBUM_LIST"});
expect(state).toEqual({"0": "*", "1": "a", "albums": undefined, "loading": false});
})