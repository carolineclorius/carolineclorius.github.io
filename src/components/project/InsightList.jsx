function InsightList({ title, items }) {
  return (
    <section className="insight-list">
      <h2>{title}</h2>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default InsightList;
