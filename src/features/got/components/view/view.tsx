import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import * as ac from '../../reducer/action.creators';
import { charactersList } from '../../data/ characters';

export function View() {
    // const [first, setfirst] = useState([]);
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(ac.loadActionCreator(charactersList));
    }, [dispatcher]);

    return (
        <>
            <form>
                <div>
                    <input type="text" id="name" placeholder="Name" required />
                </div>
                <div>
                    <input type="text" id="family" placeholder="Family" />
                </div>
                <div>
                    <input type="text" id="age" placeholder="Age" />
                </div>
                <div>
                    {' '}
                    Is alive?
                    <input type="checkbox" id="isAlive" />
                </div>
                <button type="submit">Save</button>
            </form>
            <ul>
                {characters.map((item) => (
                    <div>
                        <p>Name: {item.name}</p>
                        <p>Family: {item.family}</p>
                        <p>Age: {item.age}</p>
                        <p>Life status: {item.lifeStatus}</p>
                    </div>
                ))}
            </ul>
        </>
    );
}
