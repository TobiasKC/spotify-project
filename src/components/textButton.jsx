
const textButton = (props) => {

    return (
<button className = {props.class}> 
    <a href={props.link} rel="noopener noreferrer">{props.text}</a>
</button>
         );
}
 
export default textButton;