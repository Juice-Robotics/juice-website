
export default function TimelinePopup({ item }) {
  return (
    <>
      <h2>{item.period}: {item.title}</h2>
      <img
        src={item.img}
        style={{
          width: "100%",          
          borderRadius: "10px",
          margin: "20px 0",
          objectFit: "cover",
          flexShrink: 0
        }}
      />
      <p style={{ whiteSpace: "normal", marginBottom: "0" }}>
        {item.fullDesc}
      </p>
    </>
  )
}