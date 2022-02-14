import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({ comments }) {

    const allComments = comments.map( (eachComment) => {
        return (

            <ul className="list-unstyled">

                <p>{eachComment.comment}</p>
                <p>-- {eachComment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(eachComment.date)))}</p>

            </ul>

        );
    });

    if (comments != null)
        return (

            <div>
                <h4>Comments</h4>
                {allComments}
            </div>

        );
    else
        return (
            <div></div>
        );


}

function CheckComments({ selectedDish }) {

    if (selectedDish != null)
        return (<RenderComments comments={selectedDish.comments} />);
    else
        return (<div></div>);

}

const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>

                <div className="col-12 col-md-5 m-1">
                    <CheckComments selectedDish={props.dish} />
                </div>

            </div>
        </div>
    );

}

export default DishDetail;