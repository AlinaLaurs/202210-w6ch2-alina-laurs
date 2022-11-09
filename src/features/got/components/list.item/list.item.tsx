import { AnyAction, Dispatch } from 'redux';
import { CharacterType } from '../../models/character';
import { setStore } from '../service/storage';
import * as ac from '../../reducer/action.creators';

export function ListItem({
    item,
    dispatcher,
    characters,
}: {
    item: CharacterType;
    dispatcher: Dispatch<AnyAction>;
    characters: CharacterType[];
}) {
    const handleDelete = () => {
        dispatcher(ac.deleteActionCreator(item));
        setStore(characters);
    };

    return (
        <li>
            <h2>{item.name}</h2>
            <p>{item.family}</p>
            <p>Age: {item.age}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}
