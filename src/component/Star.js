import { FaStar } from "react-icons/fa";


const Star = function( {
    selected = false,
    onSelect = f => f
 }) {
    return (
        <FaStar
            color={selected ? "#4daeef" : "grey"}
            onClick={onSelect}
        />
        );
    };
    
export default Star;

    
