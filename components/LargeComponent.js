export default function LargeComponent() {
  return (
    <div className="lazy-box">
      <h2>⚡ Componente cargado con Lazy Loading</h2>
      <p>Este componente se descarga solo cuando la página lo necesita.</p>
    </div>
  );
}