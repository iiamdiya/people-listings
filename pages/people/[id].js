export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(people =>{
        return{
            params: { id: people.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return{
        props: {people: data }
    }
}


const Details = ({people}) => {
    return ( 
        <div>
            <h1>{people.name}</h1>
            <p>{people.email}</p>
            <p>{people.website}</p>
            <p>{people.address.city}</p>
        </div>
     );
}
 
export default Details;
