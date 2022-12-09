import styles from '../styles/Home.module.css'

export default function Home({ result }) {
  return (
    <div className={styles.container}>
      <h1> List of Users</h1>
      {result.message ? (
        <>
          <p> {result.message}</p>
        </>
      ) : (
        <>
          <ul className={styles.user_list}>
            {result.data?.map(item => (
              <div className={styles.card} key={item.id}>
                <li className={styles.title}> {item.name} </li>
                <li className={styles.description}> Role: {item.role} </li>
                <li className={styles.description}> Description: {item.description} </li>
              </div>
            ))
            }
          </ul>
        </>
      )

      }

    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`http://localhost:3000/api/users/list`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'user',
    }
  })
  const result = await response.json()
  // Pass data to the page via props
  return { props: { result } }
}
