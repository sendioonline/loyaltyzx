import Feature from "../feature";

function Features() {
  return (
    <section className="features-area mx-auto max-w-4xl p-4 pt-20">
      <div className="all-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </section>
  );
}

export default Features;
