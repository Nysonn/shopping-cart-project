import welcomeImg from '../assets/mix-fruits.jpg';

export default function WelcomeSection() {
  return (
    <section
      id="home"
      className="h-[500px] md:h-screen bg-cover bg-center flex justify-center items-center text-center"
      style={{
        backgroundImage: `url(${welcomeImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginTop: '-64px',
        paddingTop: '64px',
      }}
    >
    </section>
  );
}
