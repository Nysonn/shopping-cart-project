import welcomeImg from '../assets/mix-fruits.jpg';

export default function WelcomeSection() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex justify-center items-center text-center"
      style={{
        backgroundImage: `url(${welcomeImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '500px'
      }}
    >
    </section>
  );
}
