import { Character } from '../../models/character';

export const CardList = ({ item }: { item: Character }) => {
    return (
        <li>
            <div>
                <h2>{item.name}</h2>
                <p>Family:{item.family}</p>
                <p>Age:{item.age} </p>
                <p>Life status:{item.lifeStatus}</p>
                <input type="checkbox" />
            </div>
        </li>
    );
};
