import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ride1 from './images/rides/ride1.png';
import Ride2 from './images/rides/ride2.png';
import Ride3 from './images/rides/ride3.png';

export default function Enjoy()
{

    function toggleCheck(e)
    {
       var ele = e.target;



       if (ele.innerHTML === 'EXPLORE')
       {
            ele.innerText= 'EXPLORED';
       }
       else
       {
        ele.innerText = 'EXPLORE';
       }
    }

    function animateImg(e)
    {
        e.target.classList.add('animateImg');
    }
    function removeAnimation(e)
    {
        e.target.classList.remove('animateImg');
    }
   


    return (
        <Stack className = 'card' direction = 'column' id = 'rides'>

            <Stack className = 'card_header' direction = 'column' gap = {3}>
                <h1> Make yourself free </h1>
                <p> Go and explore all the potential you need to for enjoying yourself.
                    Make your day the best day in your life. Be amazing and be wild and Enjoy some 
                    of our special rides. </p>
            </Stack>

            <Stack className = 'card_content' direction = 'horizontal'>

                <Card className = 'text-center main_card'>
                    <Card.Img className = 'ride_image' src = {Ride1} onMouseOver = {animateImg} onMouseLeave = {removeAnimation}></Card.Img>
                    <Card.Body>
                        <Card.Title className = 'ride_title'>
                            Cataract Merry Go Round
                        </Card.Title>
                        <Card.Text>
                        ₹120/person (10 minutes)
                        </Card.Text>
                        <Button variant = 'outline-primary card_btn' onClick = {toggleCheck} > EXPLORE </Button>
                    </Card.Body>
                </Card>

                <Card className = 'text-center main_card'>
                    <Card.Img className = 'ride_image' src = {Ride2} onMouseOver = {animateImg} onMouseLeave = {removeAnimation}></Card.Img>
                    <Card.Body>
                        <Card.Title className = 'ride_title' >
                            Jingle Rings
                        </Card.Title>
                        <Card.Text>
                        ₹70/person (5 minutes)
                        </Card.Text>
                        <Button variant = 'outline-primary card_btn' onClick = {toggleCheck}> EXPLORE </Button>
                    </Card.Body>
                </Card>

                <Card className = 'text-center main_card'>
                    <Card.Img className = 'ride_image' src = {Ride3} onMouseOver = {animateImg} onMouseLeave = {removeAnimation}></Card.Img>
                    <Card.Body>
                        <Card.Title className = 'ride_title'>
                            Dungeon's Spinner
                        </Card.Title>
                        <Card.Text>
                        ₹100/person (10 minutes)
                        </Card.Text>
                        <Button variant = 'outline-primary card_btn' onClick = {toggleCheck}> EXPLORE </Button>
                    </Card.Body>
                </Card>

            </Stack>
            <br />

        </Stack>
    )
}