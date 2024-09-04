import "./App.css";

// propsの型を定義
type ProfileProps = {
  imageUrl: string;
  name: string;
  occupation: string;
  hobbies: string;
};

function App() {
  const ProfileCard = ({
    imageUrl,
    name,
    occupation,
    hobbies,
  }: ProfileProps) => {
    return (
      <div className="card">
        <img src={imageUrl} alt="プロフィール画像" />
        <h2 className="title">{name}</h2>
        <div>
          <p>職業: {occupation}</p>
          <p>趣味: {hobbies}</p>
        </div>
        <p>
          <button>Contact</button>
        </p>
      </div>
    );
  };

  return (
    <>
      <ProfileCard
        imageUrl="vite.svg"
        name="山田 太郎"
        occupation="プロジェクトマネージャー"
        hobbies="プログラミング、読書"
      />
      <ProfileCard
        imageUrl="vite.svg"
        name="鈴木 花子"
        occupation="ソフトウェアエンジニア"
        hobbies="ピアノ、映画鑑賞"
      />
    </>
  );
}

export default App;
