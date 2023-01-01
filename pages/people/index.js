import styles from '../../styles/people.module.css'
import Link from 'next/link';

export const getStaticProps = async () =>{

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return{
    props: {people: data}
  }

}

const People = ({ people }) => {
    return (
      <>
      <div>
        <h1>All People List</h1>
        {people.map(people =>(
          <Link href={'/people/' + people.id} legacyBehavior key={people.id}>
            <a className={styles.single} >
              <h3>{people.name}</h3>
            </a>
          </Link>
        ))}
      </div>
      </>
    );
  }
   
  export default People;