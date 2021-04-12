import Props from "../utils/typeMutation";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
                    <Button href={props.linkCommit} variant="primary">Show Commit</Button>
                </Card.Body>
            </Card>
        </div>
        );
};

export default Commit;