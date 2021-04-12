import Props from "../utils/typeMutation";
//import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// @ts-ignore
import { Link } from 'react-router-dom';

function Commit(props:Props){

    return (
        <div key={props.idx.toString()}>
            <Card style={{
                width: '32rem',
                margin: '0.5rem'
            }}

            >

                <Card.Body key={props.idx.toString()}>

                    <Card.Text style={{
                        minHeight: '4.2rem',
                    }}>
                        {props.description}
                    </Card.Text>
                    <a  target="_blank" href={props.linkConnect} >
                        <Button  variant="primary">Show Commit</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
        );
};

export default Commit;