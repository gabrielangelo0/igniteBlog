import Header from './components/Header';
import Post from './components/Post'
import './globals.css'
import styles from './App.module.css'
import Sidebar from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrielangelo0.png",
      name: "Gabriel Angelo",
      role: "@gabriel.angelo__"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-07-25 21:10')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://dc559.4shared.com/img/OhrfOfUEiq/s23/18183122770/photo-feed",
      name: "Dâmaris Oliveira",
      role: "@damvscl"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-07-24 16:47')
  }
]

function App () {
  return (
    <div>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar /> 
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={ post.author }
              content={ post.content }
              publishedAt={ post.publishedAt }
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}

export default App;