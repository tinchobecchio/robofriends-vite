import Card from "./Card"

const CardList = ({robots}) => {
    return(
        robots.map(robot => (
            <Card 
                id={robot.id} 
                name={robot.name} 
                email={robot.email} 
                key={robot.id}
            />
        ))
    )
}

export default CardList